import {
  ConflictException,
  ForbiddenException,
  Injectable,
  Scope,
  UnauthorizedException,
} from "@nestjs/common";
import { db } from "../database/db";
import { accounts, place, placeMember } from "../database/schema";
import {
  isInvitedToPlace,
  isPlaceHost,
  isPlaceInPrivate,
  isPlaceMember,
} from "./place.utils";
import { and, eq } from "drizzle-orm";
import { PlaceMember } from "./place.types";

@Injectable({ scope: Scope.DEFAULT })
export class PlaceService {
  constructor() {}

  public async createPlace(
    placeName: string,
    accountId: string,
    isPublic: boolean,
  ) {
    const [data] = await db
      .insert(place)
      .values({
        name: placeName,
        hostId: accountId,
        isPublic: isPublic,
      })
      .returning({ placeId: place.puuid });

    await db.insert(placeMember).values({
      accountId: accountId,
      placeId: data.placeId,
      isInvited: true,
    });
  }

  public async joinPlace(placeId: string, accountId: string) {
    if (await isPlaceMember(placeId, accountId))
      throw new ConflictException(
        "Place join fail: you already joined the place",
      );

    const isPrivate = await isPlaceInPrivate(placeId);
    const isInvited = await isInvitedToPlace(placeId, accountId);
    if (isPrivate && !isInvited)
      throw new UnauthorizedException("Place join fail: this place is private");

    await db.insert(placeMember).values({
      placeId: placeId,
      accountId: accountId,
    });
  }

  public async inviteToPlace(
    placeId: string,
    targetId: string,
    status: string,
    accountId: string,
  ) {
    if (!isPlaceHost(placeId, accountId))
      throw new ForbiddenException("Invitation failed: your not host");

    if (status == "invite") {
      await db
        .insert(placeMember)
        .values({
          placeId: placeId,
          accountId: targetId,
          isInvited: true,
        })
        .onConflictDoUpdate({
          target: [placeMember.placeId, placeMember.accountId],
          set: {
            isInvited: true,
          },
        });
    } else if (status == "cancel") {
      await db
        .update(placeMember)
        .set({
          isInvited: false,
        })
        .where(
          and(
            eq(placeMember.accountId, targetId),
            eq(placeMember.placeId, placeId),
          ),
        );
    }
  }

  public async getPlaceMembers(placeId: string): Promise<PlaceMember[]> {
    return await db
      .select({ accountId: placeMember.accountId, username: accounts.username })
      .from(placeMember)
      .innerJoin(accounts, eq(placeMember.accountId, accounts.puuid))
      .where(eq(placeMember.placeId, placeId));
  }
}

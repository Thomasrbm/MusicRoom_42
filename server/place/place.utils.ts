import { and, eq } from "drizzle-orm";
import { db } from "../database/db";
import { place, placeMember } from "../database/schema";

export async function isInvitedToPlace(
  placeId: string,
  accountId: string,
): Promise<boolean> {
  const invite = await db
    .select({ accountId: placeMember.accountId })
    .from(placeMember)
    .where(
      and(
        eq(placeMember.placeId, placeId),
        eq(placeMember.accountId, accountId),
        eq(placeMember.isInvited, true),
      ),
    )
    .limit(1);

  return invite.length > 0;
}

export async function isPlaceHost(
  placeId: string,
  accountId: string,
): Promise<boolean> {
  const result = await db
    .select({ isHost: place.hostId })
    .from(place)
    .where(and(eq(place.hostId, accountId), eq(place.puuid, placeId)))
    .limit(1);

  return result.length > 0;
}

export async function isPlaceMember(
  placeId: string,
  accountId: string,
): Promise<boolean> {
  const result = await db
    .select()
    .from(placeMember)
    .where(
      and(
        eq(placeMember.placeId, placeId),
        eq(placeMember.accountId, accountId),
      ),
    )
    .limit(1);

  return result.length > 0;
}

export async function isPlaceInPrivate(placeId: string): Promise<boolean> {
  const invite = await db
    .select({ isPublic: place.isPublic })
    .from(place)
    .where(eq(place.puuid, placeId))
    .limit(1);

  return invite.length > 0;
}

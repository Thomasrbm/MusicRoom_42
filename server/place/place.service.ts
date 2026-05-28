import { Injectable, Scope } from "@nestjs/common";
import { CreatePlaceDto } from "./place.types";
import { db } from "../database/db";
import { place } from "../database/schema";
import { JwtPayload } from "../auth/auth.types";

@Injectable({ scope: Scope.DEFAULT })
export class PlaceService {
  constructor() {}

  public async createPlace(dto: CreatePlaceDto, jwt: JwtPayload) {
    await db.insert(place).values({
      name: dto.placeName,
      hostId: jwt.puuid,
      isPublic: dto.isPublic,
    });
  }
}

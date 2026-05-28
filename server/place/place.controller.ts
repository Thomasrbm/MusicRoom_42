import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { PlaceService } from "./place.service";
import { CreatePlaceDto, InvitePlaceDto, JoinPlaceDto } from "./place.types";
import { FastifyRequest } from "fastify";
import { JwtAuthGuard } from "../auth/JwtAuthGuard";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "../auth/auth.types";

@Controller("place")
@UseGuards(JwtAuthGuard)
export class PlaceController {
  constructor(
    private placeService: PlaceService,
    private jwtService: JwtService,
  ) {}

  @Post("create")
  @HttpCode(HttpStatus.CREATED)
  public async createPlace(@Req() request: FastifyRequest) {
    const jwt = this.jwtService.decode(
      request.cookies.cookieJwt || "",
    ) as JwtPayload;

    const result = CreatePlaceDto.safeParse(request.body);

    if (!result.success) {
      throw new BadRequestException(result.error);
    }

    const data = result.data;
    await this.placeService.createPlace(
      data.placeName,
      jwt.puuid,
      data.isPublic,
    );
  }

  @Post("join")
  @HttpCode(HttpStatus.CREATED)
  public async joinPlace(@Req() request: FastifyRequest) {
    const jwt = this.jwtService.decode(
      request.cookies.cookieJwt || "",
    ) as JwtPayload;

    const result = JoinPlaceDto.safeParse(request.body);

    if (!result.success) {
      throw new BadRequestException(result.error);
    }

    const data = result.data;
    await this.placeService.joinPlace(data.placeId, jwt.puuid);
  }

  @Post("invite")
  @HttpCode(HttpStatus.CREATED)
  public async inviteToPlace(@Req() request: FastifyRequest) {
    const jwt = this.jwtService.decode(
      request.cookies.cookieJwt || "",
    ) as JwtPayload;

    const result = InvitePlaceDto.safeParse(request.body);

    if (!result.success) {
      throw new BadRequestException(result.error);
    }

    const data = result.data;
    await this.placeService.inviteToPlace(
      data.placeId,
      data.targetId,
      data.status,
      jwt.puuid,
    );
  }
}

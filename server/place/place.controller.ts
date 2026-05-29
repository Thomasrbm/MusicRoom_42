import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
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
  public async createPlace(@Req() req: FastifyRequest) {
    const jwt = this.jwtService.decode(
      req.cookies.cookieJwt || "",
    ) as JwtPayload;

    const result = CreatePlaceDto.safeParse(req.body);

    if (!result.success) {
      throw new BadRequestException(result.error);
    }

    const data = result.data;
    return await this.placeService.createPlace(
      data.placeName,
      jwt.puuid,
      data.isPublic,
    );
  }

  @Post("join")
  @HttpCode(HttpStatus.CREATED)
  public async joinPlace(@Req() req: FastifyRequest) {
    const jwt = this.jwtService.decode(
      req.cookies.cookieJwt || "",
    ) as JwtPayload;

    const result = JoinPlaceDto.safeParse(req.body);

    if (!result.success) {
      throw new BadRequestException(result.error);
    }

    const data = result.data;
    await this.placeService.joinPlace(data.placeId, jwt.puuid);
  }

  @Post("invite")
  @HttpCode(HttpStatus.CREATED)
  public async inviteToPlace(@Req() req: FastifyRequest) {
    const jwt = this.jwtService.decode(
      req.cookies.cookieJwt || "",
    ) as JwtPayload;

    const result = InvitePlaceDto.safeParse(req.body);

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

  @Get("members/:placeId")
  @HttpCode(HttpStatus.OK)
  public async getPlaceMembers(
    @Param("placeId") placeId: string,
    @Req() req: FastifyRequest,
  ) {
    return await this.placeService.getPlaceMembers(placeId);
  }
}

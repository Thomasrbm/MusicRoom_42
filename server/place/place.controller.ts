import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { PlaceService } from "./place.service";
import { CreatePlaceDto } from "./place.types";
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
  public async createPlace(
    @Body() dto: CreatePlaceDto,
    @Req() request: FastifyRequest
  ) {
    const jwt = this.jwtService.decode(
      request.cookies.cookieJwt || "",
    ) as JwtPayload;
    await this.placeService.createPlace(dto, jwt);
  }
}

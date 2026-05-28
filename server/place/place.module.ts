import { Module } from "@nestjs/common";
import { PlaceService } from "./place.service";
import { PlaceController } from "./place.controller";
import { AuthModule } from "../auth/auth.module";
import { PlaceGateway } from "./place.gateway";

@Module({
  imports: [AuthModule],
  providers: [PlaceService, PlaceGateway],
  controllers: [PlaceController],
})
export class PlaceModule {}

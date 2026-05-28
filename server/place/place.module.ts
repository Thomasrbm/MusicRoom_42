import { Module } from "@nestjs/common";
import { PlaceService } from "./place.service";
import { PlaceController } from "./place.controller";
import { AuthModule } from "../auth/auth.module";

@Module({
    imports: [AuthModule],
  providers: [PlaceService],
  controllers: [PlaceController],
})
export class PlaceModule {}

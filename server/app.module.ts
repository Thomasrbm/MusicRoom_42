import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { PlaceModule } from "./place/place.module";

@Module({
  imports: [AuthModule, PlaceModule],
})
export class AppModule {}

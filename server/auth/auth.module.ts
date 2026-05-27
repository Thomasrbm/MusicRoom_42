import { Module } from "@nestjs/common";
import { AppConfigModule } from "../config/config.module";
import { AppConfigService } from "../config/config.service";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
// mini gestionnaire de packet pour tes endpoint

@Module({
    imports: [
        AppConfigModule,
        JwtModule.registerAsync({
            imports: [AppConfigModule],
            inject: [AppConfigService],
            useFactory: (config: AppConfigService) => ({
                secret: config.jwtSecret,
                signOptions: { expiresIn: "7d" },
            }),
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}

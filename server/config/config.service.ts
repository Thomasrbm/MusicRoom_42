import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService
{
    constructor(private config: ConfigService) {}

    
    get port(): number { return this.config.get<number>("PORT") || 3001; }

    get salt(): number { return this.config.get<number>("SALT") || 10; }


}
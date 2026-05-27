import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import fastifyCookie from "@fastify/cookie";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.register(fastifyCookie);

  app.setGlobalPrefix("/api/musicroom");

  console.log(process.env.DATABASE_URL);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();

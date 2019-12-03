/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { NestFactory } from '@nestjs/core';
import { PlatformModule } from './modules/platform/platform.module';
import { Module } from '@nestjs/common';
import { TeamModule } from './modules/team/team.module';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { join } from 'path';

@Module({
  imports: [PlatformModule, TeamModule],
  controllers: [],
  providers: [],
})
class Modules {}

/**
 * Bootstrap function, use for assemble modules
 */
async function bootstrap() {
  // const app = await NestFactory.create(Mod);
  // await app.listen(3000);

  const microservicesApp = await NestFactory.createMicroservice(Modules, {
    transport: Transport.TCP,
  });

  microservicesApp.listen(() => process.stdout.write('Microservice is listening'));

  const app = await NestFactory.create<NestFastifyApplication>(
    Modules, new FastifyAdapter({ logger: true }),
  );

  // Enable CORS
  app.enableCors();

  await app.listen(5000);
}
bootstrap();

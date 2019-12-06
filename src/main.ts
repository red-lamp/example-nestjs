/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Transport } from '@nestjs/common/enums/transport.enum';

import { PlatformServices } from './modules.platform/platform.service';

/**
 * Bootstrap function, use for assemble modules
 */
async function bootstrap() {
  // const app = await NestFactory.create(Mod);
  // await app.listen(3000);

  const microservicesApp = await NestFactory.createMicroservice(PlatformServices, {
    transport: Transport.TCP,
  });

  microservicesApp.listen(() => process.stdout.write('Microservice is listening'));

  const app = await NestFactory.create<NestFastifyApplication>(
    PlatformServices, new FastifyAdapter({ logger: true }),
  );

  // Enable CORS
  app.enableCors();

  await app.listen(5000);
}

bootstrap();

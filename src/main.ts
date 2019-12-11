/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Transport } from '@nestjs/common/enums/transport.enum';

import { AppServices } from './app.service';

/**
 * Bootstrap function, use for assemble modules
 */
async function bootstrap() {
  // create a microservices
  const microApp = await NestFactory.create(AppServices);
  microApp.connectMicroservice({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000 },
  });

  await microApp.startAllMicroservicesAsync();
  await microApp.listen(3001);

  // create a service
  const app = await NestFactory.create<NestFastifyApplication>(
    AppServices, new FastifyAdapter({ logger: true }),
  );

  // Enable CORS
  app.enableCors();

  await app.listen(5000);
}

bootstrap();

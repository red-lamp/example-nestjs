/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

/**
 * Bootstrap function, use for assemble modules
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

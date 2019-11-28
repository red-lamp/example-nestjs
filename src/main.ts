/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Module } from '@nestjs/common';
import { TeamModule } from './modules/team/team.module';

@Module({
  imports: [AppModule, TeamModule],
  controllers: [],
  providers: [],
})
class Mod {}

/**
 * Bootstrap function, use for assemble modules
 */
async function bootstrap() {
  const app = await NestFactory.create(Mod);
  await app.listen(3000);
}
bootstrap();

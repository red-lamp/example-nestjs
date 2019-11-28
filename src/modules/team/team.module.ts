/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

/**
 * Module ejection
 */
@Module({
  imports: [],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}

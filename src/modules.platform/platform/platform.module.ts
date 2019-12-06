/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';

/**
 * Module ejection
 */
@Module({
  imports: [],
  controllers: [PlatformController],
  providers: [PlatformService],
})
export class PlatformModule {}

/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';
import { EnumService } from '../share/dto/enum.message';
import { Transport } from '@nestjs/common/enums/transport.enum';

/**
 * Module ejection
 */
@Module({
  imports: [
    ClientsModule.register([{ name: EnumService.PLATFORM_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [PlatformController],
  providers: [PlatformService],
})
export class PlatformModule {}

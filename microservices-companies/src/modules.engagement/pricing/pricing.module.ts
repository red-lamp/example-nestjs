/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { PricingController } from './pricing.controller';
import { PricingService } from './pricing.service';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { EnumService } from 'src/modules.company/share/dto/enum.message';
import { ClientsModule } from '@nestjs/microservices';

/**
 * Module ejection
 */
@Module({
  imports: [
    ClientsModule.register([{ name: EnumService.PLATFORM_SERVICE, transport: Transport.TCP }]),
  ],
  controllers: [PricingController],
  providers: [PricingService],
})
export class PricingModule {}

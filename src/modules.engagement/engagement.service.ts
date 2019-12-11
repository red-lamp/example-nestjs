/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { PricingModule } from './pricing/pricing.module';

@Module({
    imports: [PricingModule],
    controllers: [],
    providers: [],
  })

 export class EngagementServices {}

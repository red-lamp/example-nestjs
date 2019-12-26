/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { BidModule } from './bid/bid.module';

@Module({
    imports: [BidModule],
    controllers: [],
    providers: [],
  })

 export class AuctionModules {}

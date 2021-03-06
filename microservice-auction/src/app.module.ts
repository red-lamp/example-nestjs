/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { AuctionModules } from './modules.auction/auction.module';

@Module({
    imports: [AuctionModules],
    controllers: [],
    providers: [],
  })

 export class AppModules {}

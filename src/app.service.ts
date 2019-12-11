/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { EngagementServices } from './modules.engagement/engagement.service';
import { PlatformServices } from './modules.platform/platform.service';

@Module({
    imports: [EngagementServices, PlatformServices],
    controllers: [],
    providers: [],
  })

 export class AppServices {}

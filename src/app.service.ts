/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { EngagementServices } from './modules.engagement/engagement.service';
import { CompanyServices } from './modules.company/company.service';

@Module({
    imports: [EngagementServices, CompanyServices],
    controllers: [],
    providers: [],
  })

 export class AppServices {}

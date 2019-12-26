/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { EngagementModules } from './modules.engagement/engagement.module';
import { CompanyModules } from './modules.company/company.module';

@Module({
    imports: [EngagementModules, CompanyModules],
    controllers: [],
    providers: [],
  })

 export class AppModules {}

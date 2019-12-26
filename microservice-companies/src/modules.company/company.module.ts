/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Module } from '@nestjs/common';
import { PlatformModule } from './platform/platform.module';
import { TeamModule } from './team/team.module';

@Module({
    imports: [PlatformModule, TeamModule],
    controllers: [],
    providers: [],
  })

 export class CompanyModules {}

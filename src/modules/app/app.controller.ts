/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ReadAppDTO } from './dto/read-app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Router GET, POST, PUT, DELETE
   */
  @Get()
  getApp(): ReadAppDTO {
    const readAppDTO = this.appService.getApp();
    return this.appService.getApp();
  }
}

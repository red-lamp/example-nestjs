/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ReadAppDTO } from './dto/read-app.dto';
import { CreateAppDTO } from './dto/create-app.dto';
import { MessageDTO } from '../share/dto/message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Router GET, POST, PUT, DELETE
   */
  @Get('platform')
  getApp(): ReadAppDTO {
    return this.appService.getApp();
  }

  @Post('platform')
  postApp(@Body() readAppDTO: ReadAppDTO): ReadAppDTO {
    return this.appService.postApp(readAppDTO);
  }

  @Put('platform')
  putApp(@Body() createAppDTO: CreateAppDTO): ReadAppDTO {
    return this.appService.putApp(createAppDTO);
  }

  @Delete('platform')
  deleteApp(@Body() readAppDTO: ReadAppDTO): MessageDTO {
    return this.appService.deleteApp(readAppDTO);
  }
}

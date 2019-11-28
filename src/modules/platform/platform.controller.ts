/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { ReadPlatformDTO } from './dto/read-platform.dto';
import { CreatePlatformDTO } from './dto/create-platform.dto';
import { MessageDTO } from '../share/dto/message.dto';

@Controller()
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  /**
   * Router GET, POST, PUT, DELETE
   */
  @Get('platform')
  getPlatform(): ReadPlatformDTO {
    return this.platformService.getPlatform();
  }

  @Post('platform')
  postPlatform(@Body() readPlatformDTO: ReadPlatformDTO): ReadPlatformDTO {
    return this.platformService.postPlatform(readPlatformDTO);
  }

  @Put('platform')
  putPlatform(@Body() createPlatformDTO: CreatePlatformDTO): ReadPlatformDTO {
    return this.platformService.putPlatform(createPlatformDTO);
  }

  @Delete('platform')
  deletePlatform(@Body() readPlatformDTO: ReadPlatformDTO): MessageDTO {
    return this.platformService.deletePlatform(readPlatformDTO);
  }
}

/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Controller, Get, Post, Delete, Put, Body, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { PlatformService } from './platform.service';
import { ReadPlatformDTO } from './dto/read-platform.dto';
import { CreatePlatformDTO } from './dto/create-platform.dto';
import { MessageDTO } from '../share/dto/message.dto';
import { EnumService } from '../share/dto/enum.message';
import { Observable } from 'rxjs';
import { ReadPricingDTO } from 'src/modules.engagement/pricing/dto/read-pricing.dto';

@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService,
              @Inject(EnumService.PLATFORM_SERVICE) private readonly client: ClientProxy) {}

  /**
   * Router GET, POST, PUT, DELETE
   */
  @Get()
  async getPlatform(): Promise<ReadPlatformDTO> {
    const platformDTO = this.platformService.getPlatform();
    const pricingDTO = await this.client.send<ReadPricingDTO>({ cmd: 'pricing' }, platformDTO.id).toPromise();
    platformDTO.pricing = pricingDTO;

    return platformDTO;
  }

  @Post()
  postPlatform(@Body() readPlatformDTO: ReadPlatformDTO): ReadPlatformDTO {
    return this.platformService.postPlatform(readPlatformDTO);
  }

  @Put()
  putPlatform(@Body() createPlatformDTO: CreatePlatformDTO): ReadPlatformDTO {
    return this.platformService.putPlatform(createPlatformDTO);
  }

  @Delete()
  deletePlatform(@Body() readPlatformDTO: ReadPlatformDTO): MessageDTO {
    return this.platformService.deletePlatform(readPlatformDTO);
  }
}

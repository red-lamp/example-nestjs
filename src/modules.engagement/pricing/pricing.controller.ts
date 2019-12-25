/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Controller, Get, Post, Delete, Put, Body, Inject } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { ReadPricingDTO } from './dto/read-pricing.dto';
import { CreatePricingDTO } from './dto/create-pricing.dto';
import { MessageDTO } from '../share/dto/message.dto';
import { MessagePattern, ClientProxy } from '@nestjs/microservices';
import { EnumService } from 'src/modules.company/share/dto/enum.message';

@Controller('pricing')
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  /**
   * Router GET, POST, PUT, DELETE
   */
  @MessagePattern({ cmd: 'pricing' })
  @Get()
  getPricing(platformId): ReadPricingDTO {
    const pricingDTO = this.pricingService.getPricing();
    pricingDTO.platformId = platformId;

    return pricingDTO;
  }

  @Post()
  postPricing(@Body() readPricingDTO: ReadPricingDTO): ReadPricingDTO {
    return this.pricingService.postPricing(readPricingDTO);
  }

  @Put()
  putPricing(@Body() createPricingDTO: CreatePricingDTO): ReadPricingDTO {
    return this.pricingService.putPricing(createPricingDTO);
  }

  @Delete()
  deletePricing(@Body() readPricingDTO: ReadPricingDTO): MessageDTO {
    return this.pricingService.deletePricing(readPricingDTO);
  }
}

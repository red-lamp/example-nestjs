/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { ReadPricingDTO } from './dto/read-pricing.dto';
import { CreatePricingDTO } from './dto/create-pricing.dto';
import { MessageDTO } from '../share/dto/message.dto';

@Controller('pricing')
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  /**
   * Router GET, POST, PUT, DELETE
   */
  @Get()
  getPricing(): ReadPricingDTO {
    return this.pricingService.getPricing();
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

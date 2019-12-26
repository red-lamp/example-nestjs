/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Injectable } from '@nestjs/common';
import { ReadPricingDTO } from './dto/read-pricing.dto';
import { CreatePricingDTO } from './dto/create-pricing.dto';
import { MessageDTO } from '../share/dto/message.dto';
import { EnumStatusCode, EnumMessage } from '../share/dto/enum.message';

@Injectable()
export class PricingService {

  /**
   * Assemble a dto read platform
   */
  private getPricingDTO(): ReadPricingDTO {
    // mock a ReadPricingDTO object
    const readPricingDTO = new ReadPricingDTO();
    readPricingDTO.id = 'id_pricing1';
    readPricingDTO.platformId = 'FMS';
    readPricingDTO.teamMemberId = 'id_member1';
    readPricingDTO.pricePerManday = 9000;

    return readPricingDTO;
  }

  /**
   * Return a ReadPriceDTO object
   */
  getPricing(): ReadPricingDTO {
    const readPricingDTO = this.getPricingDTO();
    return readPricingDTO;
  }

  /**
   * Return a ReadPricingDTO object after mock update function
   */
  postPricing(readPricingDTO: ReadPricingDTO): ReadPricingDTO {
    const updatePricingDTO = this.getPricing();
    updatePricingDTO.id = readPricingDTO.id;
    updatePricingDTO.platformId = readPricingDTO.platformId;
    updatePricingDTO.teamMemberId = readPricingDTO.teamMemberId;
    updatePricingDTO.pricePerManday = readPricingDTO.pricePerManday;

    return updatePricingDTO;
  }

  /**
   * Return a ReadPricingDTO object after mock insert function
   */
  putPricing(createPricingDTO: CreatePricingDTO): ReadPricingDTO {
    // mock a readPricingDTO object
    const readPricingDTO = this.getPricing();
    readPricingDTO.id = createPricingDTO.id;
    readPricingDTO.pricePerManday = createPricingDTO.pricePerManday;

    return readPricingDTO;
  }

  /**
   * Return a resultDTO object after mock delete function
   */
  deletePricing(readPlatformDTO: ReadPricingDTO): MessageDTO {
    const messageDTO = new MessageDTO();
    messageDTO.status = EnumStatusCode.SUCCESS;
    messageDTO.message = readPlatformDTO.id + ' ' + EnumMessage.HAS_BEEN_DEL;
    return messageDTO;
  }
}

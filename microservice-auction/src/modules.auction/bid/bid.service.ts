/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Injectable } from '@nestjs/common';
import { ReadBidDTO } from './dto/read-bid.dto';

@Injectable()
export class BidService {

  /**
   * Assemble a dto read platform
   */
  private getBidDTO(): ReadBidDTO {
    // mock a ReadBidDTO object
    const readBidDTO = new ReadBidDTO();
    readBidDTO.id = 'id_bid1';
    readBidDTO.bidPrice = 2000000;

    return readBidDTO;
  }

  /**
   * Return a ReadPriceDTO object
   */
  getBid(): ReadBidDTO {
    const readBidDTO = this.getBidDTO();
    return readBidDTO;
  }
}

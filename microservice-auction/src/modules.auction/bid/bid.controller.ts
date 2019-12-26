import { Controller, Get } from '@nestjs/common';
import { BidService } from './bid.service';
import { ReadBidDTO } from './dto/read-bid.dto';

@Controller()
export class BidController {
  constructor(private readonly bidService: BidService) {}

  @Get()
  getBid(): ReadBidDTO {
    return this.bidService.getBid();
  }
}

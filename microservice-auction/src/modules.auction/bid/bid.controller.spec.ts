import { Test, TestingModule } from '@nestjs/testing';
import { BidController } from './bid.controller';
import { BidService } from './bid.service';
import { ReadBidDTO } from './dto/read-bid.dto';

describe('BidController', () => {
  let bidController: BidController;

  beforeEach(async () => {
    const Bid: TestingModule = await Test.createTestingModule({
      controllers: [BidController],
      providers: [BidService],
    }).compile();

    bidController = Bid.get<BidController>(BidController);
  });

  describe('root', () => {
    it('should return object is instance of "ReadBidDTO!"', () => {
      const readBidDTO = bidController.getBid();
      expect(readBidDTO).toBeInstanceOf(ReadBidDTO);
    });
  });
});

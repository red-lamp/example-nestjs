/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Test, TestingModule } from '@nestjs/testing';
import { PricingController } from './pricing.controller';
import { PricingService } from './pricing.service';
import { ReadPricingDTO } from './dto/read-pricing.dto';

/**
 * Initiate PricingController testing
 */
describe('PricingController', () => {
  let pricingController: PricingController;

  beforeEach(async () => {
    const Pricing: TestingModule = await Test.createTestingModule({
      controllers: [PricingController],
      providers: [PricingService],
    }).compile();

    pricingController = Pricing.get<PricingController>(PricingController);
  });

  // Describe return object is ReadPricingDTO
  describe('root', () => {
    it('should return object is instance of "ReadPricingDTO!"', () => {
      const readPricingDTO = pricingController.getPricing();
      expect(readPricingDTO).toBeInstanceOf(ReadPricingDTO);
    });
  });
});

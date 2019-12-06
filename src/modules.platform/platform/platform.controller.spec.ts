/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Test, TestingModule } from '@nestjs/testing';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';
import { ReadPlatformDTO } from './dto/read-platform.dto';

/**
 * Initiate PlatformController testing
 */
describe('PlatformController', () => {
  let platformController: PlatformController;

  beforeEach(async () => {
    const platform: TestingModule = await Test.createTestingModule({
      controllers: [PlatformController],
      providers: [PlatformService],
    }).compile();

    platformController = platform.get<PlatformController>(PlatformController);
  });

  // Describe return object is ReadPlatformDTO
  describe('root', () => {
    it('should return object is instance of "ReadPlatformDTO!"', () => {
      const readPlatformDTO = platformController.getPlatform();
      expect(readPlatformDTO).toBeInstanceOf(ReadPlatformDTO);
    });
  });
});

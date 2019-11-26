/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadAppDTO } from './dto/read-app.dto';

/**
 * Initiate AppController testing
 */
describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  // Describe return object is ReadAppDTO
  describe('root', () => {
    it('should return object is instance of "ReadAppDTO!"', () => {
      const readAppDTO = appController.getApp();
      expect(readAppDTO).toBeInstanceOf(ReadAppDTO);
    });
  });
});

import { Injectable } from '@nestjs/common';
import { ReadAppDto } from './dto/read-app.dto';
import { EnumApp } from './dto/enum.app';

@Injectable()
export class AppService {

  /**
   * Assemble a dto read app
   */
  private assembleReadAppDto(): ReadAppDto {
    const radto = new ReadAppDto();
    radto.name = 'Online store';
    radto.type = EnumApp.OnlineStore;
    radto.description = 'P2 Online store';

    return radto;
  }

  /**
   * return a ReadAppDto object
   */
  getApp(): ReadAppDto {
    return this.assembleReadAppDto();
  }
}

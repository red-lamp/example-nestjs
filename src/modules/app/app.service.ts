/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Injectable } from '@nestjs/common';
import { ReadAppDTO } from './dto/read-app.dto';
import { EnumApp } from './dto/enum.app';

@Injectable()
export class AppService {

  /**
   * Assemble a dto read app
   */
  private assembleReadAppDTO(): ReadAppDTO {
    const radto = new ReadAppDTO();
    radto.name = 'Online store';
    radto.type = EnumApp.OnlineStore;
    radto.description = 'P2 Online store';

    return radto;
  }

  /**
   * Return a ReadAppDto object
   */
  getApp(): ReadAppDTO {
    return this.assembleReadAppDTO();
  }
}

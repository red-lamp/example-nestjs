/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Injectable } from '@nestjs/common';
import { ReadAppDTO } from './dto/read-app.dto';
import { EnumApp } from './dto/enum.app';
import { TeamMember } from '../team/dto/team-member';

@Injectable()
export class AppService {

  /**
   * Assemble a dto read app
   */
  private assembleReadAppDTO(): ReadAppDTO {
    // mock a teamMember object
    const teamMember = new TeamMember();
    teamMember.age = 28;
    teamMember.name = 'Pond';
    teamMember.position = 'Lead innovation developer';
    teamMember.gender = 'male';

    // mock a ReadAppDTO object
    const radto = new ReadAppDTO();
    radto.name = 'Online store';
    radto.type = EnumApp.OnlineStore;
    radto.description = 'P2 Online store';
    radto.teamMember = [teamMember];

    return radto;
  }

  /**
   * Return a ReadAppDto object
   */
  getApp(): ReadAppDTO {
    return this.assembleReadAppDTO();
  }
}

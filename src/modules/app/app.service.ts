/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Injectable } from '@nestjs/common';
import { ReadAppDTO } from './dto/read-app.dto';
import { EnumApp } from './dto/enum.app';
import { TeamMember } from '../team/dto/team-member';
import { CreateAppDTO } from './dto/create-app.dto';
import { MessageDTO } from '../share/dto/message.dto';
import { EnumStatusCode, EnumMessage } from '../share/dto/enum.message';

@Injectable()
export class AppService {

  /**
   * Assemble a dto read app
   */
  private assembleReadAppDTO(): ReadAppDTO {
    // mock a ReadAppDTO object
    const readAppDTO = new ReadAppDTO();
    readAppDTO.id = 'abc123';
    readAppDTO.name = 'Online store';
    readAppDTO.type = EnumApp.OnlineStore;
    readAppDTO.description = 'P2 Online store';

    return readAppDTO;
  }

  /**
   * Return a ReadAppDTO object
   */
  getApp(): ReadAppDTO {
    // mock a teamMember object
    const teamMember = new TeamMember();
    teamMember.age = 28;
    teamMember.name = 'Pond';
    teamMember.position = 'Lead innovation developer';
    teamMember.gender = 'male';

    const readAppDTO = this.assembleReadAppDTO();
    readAppDTO.teamMember = [teamMember];

    return readAppDTO;
  }

  /**
   * Return a ReadAppDTO object after mock update function
   */
  postApp(readAppDTO: ReadAppDTO): ReadAppDTO {
    const updateAppDTO = this.assembleReadAppDTO();
    updateAppDTO.id = readAppDTO.id;
    updateAppDTO.name = readAppDTO.name;
    updateAppDTO.type = readAppDTO.type;
    updateAppDTO.description = readAppDTO.description;

    // mock update no need to display team member
    delete updateAppDTO.teamMember;

    return updateAppDTO;
  }

  /**
   * Return a ReadAppDTO object after mock insert function
   */
  putApp(createAppDTO: CreateAppDTO): ReadAppDTO {
    // mock a teamMember object
    const teamMember = new TeamMember();
    teamMember.age = 25;
    teamMember.name = 'Foam';
    teamMember.position = 'Associate innovation developer';
    teamMember.gender = 'male';

    const readAppDTO = this.assembleReadAppDTO();
    readAppDTO.name = createAppDTO.name;
    readAppDTO.type = createAppDTO.type;
    readAppDTO.description = createAppDTO.description;
    readAppDTO.teamMember = [teamMember];

    return readAppDTO;
  }

  /**
   * Return a resultDTO object after mock delete function
   */
  deleteApp(readAppDTO: ReadAppDTO): MessageDTO {
    const messageDTO = new MessageDTO();
    messageDTO.status = EnumStatusCode.SUCCESS;
    messageDTO.message = readAppDTO.id + ' ' + EnumMessage.HAS_BEEN_DEL;
    return messageDTO;
  }
}

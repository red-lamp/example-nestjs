/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Injectable } from '@nestjs/common';
import { ReadPlatformDTO } from './dto/read-platform.dto';
import { EnumPlatform } from './dto/enum.platform';
import { TeamMemberDTO } from '../team/dto/team-member.dto';
import { CreatePlatformDTO } from './dto/create-platform.dto';
import { MessageDTO } from '../share/dto/message.dto';
import { EnumStatusCode, EnumMessage } from '../share/dto/enum.message';

@Injectable()
export class PlatformService {

  /**
   * Assemble a dto read platform
   */
  private assembleReadPlatformDTO(): ReadPlatformDTO {
    // mock a ReadPlatformDTO object
    const readPlatformDTO = new ReadPlatformDTO();
    readPlatformDTO.id = 'abc123';
    readPlatformDTO.name = 'Online store';
    readPlatformDTO.type = EnumPlatform.OnlineStore;
    readPlatformDTO.description = 'P2 Online store';

    return readPlatformDTO;
  }

  /**
   * Return a ReadPlatformDTO object
   */
  getPlatform(): ReadPlatformDTO {
    // mock a teamMember object
    const teamMember = new TeamMemberDTO();
    teamMember.age = 28;
    teamMember.name = 'Pond';
    teamMember.position = 'Lead innovation developer';
    teamMember.gender = 'male';

    const readPlatformDTO = this.assembleReadPlatformDTO();
    readPlatformDTO.teamMember = [teamMember];

    return readPlatformDTO;
  }

  /**
   * Return a ReadPlatformDTO object after mock update function
   */
  postPlatform(readPlatformDTO: ReadPlatformDTO): ReadPlatformDTO {
    const updatePlatformDTO = this.assembleReadPlatformDTO();
    updatePlatformDTO.id = readPlatformDTO.id;
    updatePlatformDTO.name = readPlatformDTO.name;
    updatePlatformDTO.type = readPlatformDTO.type;
    updatePlatformDTO.description = readPlatformDTO.description;

    // mock update no need to display team member
    delete updatePlatformDTO.teamMember;

    return updatePlatformDTO;
  }

  /**
   * Return a ReadPlatformDTO object after mock insert function
   */
  putPlatform(createPlatformDTO: CreatePlatformDTO): ReadPlatformDTO {
    // mock a teamMember object
    const teamMember = new TeamMemberDTO();
    teamMember.age = 25;
    teamMember.name = 'Foam';
    teamMember.position = 'Associate innovation developer';
    teamMember.gender = 'male';

    const readPlatformDTO = this.assembleReadPlatformDTO();
    readPlatformDTO.name = createPlatformDTO.name;
    readPlatformDTO.type = createPlatformDTO.type;
    readPlatformDTO.description = createPlatformDTO.description;
    readPlatformDTO.teamMember = [teamMember];

    return readPlatformDTO;
  }

  /**
   * Return a resultDTO object after mock delete function
   */
  deletePlatform(readPlatformDTO: ReadPlatformDTO): MessageDTO {
    const messageDTO = new MessageDTO();
    messageDTO.status = EnumStatusCode.SUCCESS;
    messageDTO.message = readPlatformDTO.id + ' ' + EnumMessage.HAS_BEEN_DEL;
    return messageDTO;
  }
}

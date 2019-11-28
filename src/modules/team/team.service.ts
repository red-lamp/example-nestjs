/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Injectable } from '@nestjs/common';
import { TeamMemberDTO } from '../team/dto/team-member.dto';

@Injectable()
export class TeamService {

  /**
   * Return a TeamMember object
   */
  getTeamMember(who: string): TeamMemberDTO {
    // mock a teamMember object
    switch (who) {
      case 'tony': {
        const teamMember = new TeamMemberDTO();
        teamMember.age = 38;
        teamMember.name = 'Tony William';
        teamMember.position = 'Head of development';
        teamMember.gender = 'male';

        return teamMember;
      }
      case 'pond': {
        const teamMember = new TeamMemberDTO();
        teamMember.age = 28;
        teamMember.name = 'Pond';
        teamMember.position = 'Lead innovation developer';
        teamMember.gender = 'male';

        return teamMember;
      }
      case 'foam': {
        const teamMember = new TeamMemberDTO();
        teamMember.age = 25;
        teamMember.name = 'Foam';
        teamMember.position = 'Associate innovation developer';
        teamMember.gender = 'male';

        return teamMember;
      }
      default:
        return new TeamMemberDTO();
    }
  }
}

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
  getTeamMember(): TeamMemberDTO {
    // mock a teamMember object
    const teamMember = new TeamMemberDTO();
    teamMember.age = 38;
    teamMember.name = 'Tony William';
    teamMember.position = 'Head of development';
    teamMember.gender = 'male';

    return teamMember;
  }
}

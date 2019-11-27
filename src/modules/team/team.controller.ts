/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Controller, Get } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamMemberDTO } from './dto/team-member.dto';

@Controller()
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  /**
   * Router GET, POST, PUT, DELETE
   */
  @Get()
  getTeamMember(): TeamMemberDTO {
    return this.teamService.getTeamMember();
  }
}

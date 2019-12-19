/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { Test, TestingModule } from '@nestjs/testing';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { TeamMemberDTO } from './dto/team-member.dto';

/**
 * Initiate TeamController testing
 */
describe('TeamController', () => {
  let teamController: TeamController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TeamController],
      providers: [TeamService],
    }).compile();

    teamController = app.get<TeamController>(TeamController);
  });

  // Describe return object is ReadAppDTO
  describe('root', () => {
    it('should return object is instance of "ReadAppDTO!"', () => {
      const teamMemberDTO = teamController.getTeamMember();
      expect(teamMemberDTO).toBeInstanceOf(TeamMemberDTO);
    });
  });
});

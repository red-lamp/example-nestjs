import { TeamMember } from 'src/modules/team/dto/team-member';

/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

 /**
  * App data transfer object
  */
export class ReadAppDTO {
    name: string;
    type: number;
    description: string;
    teamMember: TeamMember[];
  }

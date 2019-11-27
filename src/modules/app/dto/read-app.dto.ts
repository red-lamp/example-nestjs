/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { TeamMember } from '../../team/dto/team-member';

 /**
  * App data transfer object
  */
export class ReadAppDTO {
    id: string;
    name: string;
    type: number;
    description: string;
    teamMember: TeamMember[];
  }

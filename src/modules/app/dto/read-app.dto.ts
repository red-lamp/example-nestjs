/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { TeamMemberDTO } from '../../team/dto/team-member.dto';

 /**
  * App data transfer object
  */
export class ReadAppDTO {
  id: string;
  name: string;
  type: number;
  description: string;
  teamMember: TeamMemberDTO[];
}

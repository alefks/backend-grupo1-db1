import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamPartnerDto } from './create-team-partner.dto';

export class UpdateTeamPartnerDto extends PartialType(CreateTeamPartnerDto) {}

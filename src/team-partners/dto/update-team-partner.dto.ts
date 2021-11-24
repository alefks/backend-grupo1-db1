import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamPartnerDto } from './create-team-partner.dto';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateTeamPartnerDto extends PartialType(CreateTeamPartnerDto) {
  @IsNumber()
  @IsOptional()
  disconnectTeam?: number;
}

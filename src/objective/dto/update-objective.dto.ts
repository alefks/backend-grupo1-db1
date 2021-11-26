import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectiveDto } from './create-objective.dto';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateObjectiveDto extends PartialType(CreateObjectiveDto) {
  @IsOptional()
  @IsNumber()
  disconnectObjective?: number;
}

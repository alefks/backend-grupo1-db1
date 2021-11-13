import {
  IsArray,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateObjectiveDto {
  @IsString()
  @Length(2, 200)
  name: string;

  @IsString()
  @Length(2, 1000)
  description: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsInt()
  team: number;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  relationalObjectives: number[];

  @IsInt()
  manager: number;
}

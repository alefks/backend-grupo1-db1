import {
  IsArray,
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateObjectiveDto {
  @IsString()
  @Length(2, 200)
  name: string;

  @IsString()
  @Length(2, 1000)
  description: string;

  @IsOptional()
  @IsNumber()
  frequency: number;

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

import {
  IsArray,
  IsDateString,
  IsInt,
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
  @IsString()
  @MaxLength(40, { message: 'Máximo 40 caracteres' })
  frequency: string;

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

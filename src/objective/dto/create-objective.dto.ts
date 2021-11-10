import { IsDateString, IsInt, IsString, Length } from 'class-validator';

export class CreateObjectiveDto {
  @IsString()
  @Length(2, 200)
  name: string;

  @IsString()
  @Length(2, 1000)
  description: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsInt()
  teamID: number;

  @IsInt({ each: true })
  relationalObjectives?: number[];

  @IsInt()
  managerId: number;
}

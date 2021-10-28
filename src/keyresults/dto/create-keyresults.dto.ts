import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateKeyResultsDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  goal: string;

  @IsOptional()
  achieved: string;

  @IsOptional()
  frequency: string;

  @IsOptional()
  @IsNumber({}, { each: true })
  chekingDates?: string[];
}

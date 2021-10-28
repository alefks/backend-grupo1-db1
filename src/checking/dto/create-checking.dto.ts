import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCheckingDto {
  @IsNotEmpty()
  @IsNumber()
  result: number;

  @IsNotEmpty()
  date: Date;
}

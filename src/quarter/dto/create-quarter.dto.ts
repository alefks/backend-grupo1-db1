import { MaxLength, MinLength, IsNotEmpty, IsString } from 'class-validator';

export class CreateQuarterDto {
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  @IsNotEmpty()
  name: string;
}

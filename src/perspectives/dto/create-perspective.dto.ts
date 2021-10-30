import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePerspectiveDto {
  @IsNotEmpty({ message: 'You must write a name for your perspective.' })
  @MinLength(2, {
    message: "Your perspective's name must have at least 2 characters.",
  })
  @MaxLength(50, {
    message: "Your perspective can't have more than 50 characters.",
  })
  @IsString({ message: 'This field must be a string type.' })
  name: string;

  @IsOptional()
  @IsString({ message: 'This field must be a string type.' })
  percentage: number;

  @IsOptional()
  departments: string;
}

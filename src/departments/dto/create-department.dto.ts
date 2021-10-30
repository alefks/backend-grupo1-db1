import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty({ message: 'You must write a name for your department.' })
  @MinLength(2, {
    message: "Your department's name must have at least 2 characters.",
  })
  @MaxLength(50, {
    message: "Your department can't have more than 50 characters.",
  })
  @IsString({ message: 'This field must be a string type.' })
  name: string;
}

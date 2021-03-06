import {
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsInt,
} from 'class-validator';

export class CreateTeamDto {
  @MaxLength(50, { message: 'O nome deve conter até 50 caracteres' })
  @MinLength(2, { message: 'O nome deve conter mais de 2 caracteres' })
  @IsNotEmpty({ message: 'Insira um nome' })
  name: string;

  @IsOptional()
  @IsInt({ each: true })
  teamPartners: number[];
}

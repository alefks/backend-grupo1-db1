import {
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreateTeamPartnerDto {
  @MaxLength(50, { message: 'O nome deve conter até 50 caracteres' })
  @MinLength(2, { message: 'O nome deve conter mais de 2 caracteres' })
  @IsNotEmpty({ message: 'Insira um nome' })
  name: string;

  @IsInt({ each: true })
  @IsOptional()
  team: number[];
}

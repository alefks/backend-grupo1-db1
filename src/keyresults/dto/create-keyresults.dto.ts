import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  MaxLength,
  MinLength,
  IsString,
} from 'class-validator';

export class CreateKeyResultsDto {
  @IsNotEmpty({ message: 'campo obrigatório, ex: OKR1' })
  @IsString()
  @MaxLength(30, { message: 'Máximo 30 caracteres' })
  @MinLength(4, { message: 'Minimo 4 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'Obrigatório o preenchimento da descrição' })
  @IsString()
  @MaxLength(200, { message: 'Máximo 200 caracteres' })
  description: string;

  @IsNumber()
  goal: number;

  @IsNumber()
  responsible: number;

  @IsNumber()
  objective: number;
}

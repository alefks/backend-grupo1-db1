import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCheckinDto {
  @IsNotEmpty({ message: 'Obrigatório informar a nota' })
  @IsNumber()
  result: number;

  @IsOptional({ message: 'Obrigatório o preenchimento da descrição' })
  @IsString()
  @MaxLength(200, { message: 'Máximo 200 caracteres' })
  note: string;

  @IsOptional()
  @IsNumber()
  achieved: number;

  @IsNotEmpty({ message: 'Obrigatório informar a data do Ckeckin' })
  date: Date;

  @IsNumber()
  keyResult: number;
}

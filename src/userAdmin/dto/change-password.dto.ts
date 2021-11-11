import { MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty({ message: 'Informe uma senha' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 carcateres' })
  @MaxLength(32, { message: 'A senha deve ter no máximo 32 carcateres' })
  password: string;
}

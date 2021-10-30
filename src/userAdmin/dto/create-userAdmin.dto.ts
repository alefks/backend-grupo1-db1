import {
  MaxLength,
  MinLength,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UserAdminDto {
  @MaxLength(20, { message: 'O nome deve conter até 20 caracteres' })
  @MinLength(2, { message: 'O nome deve conter mais de 2 caracteres' })
  @IsString()
  @IsNotEmpty({ message: 'Insira um nome' })
  name: string;

  @MaxLength(200, { message: 'O email deve conter até 200 caracteres' })
  @IsString()
  @IsEmail({}, { message: 'Insira um email válido' })
  @IsNotEmpty({ message: 'Insira um email' })
  email: string;

  @MaxLength(0, { message: 'O nome de usuário deve conter até 20 caracteres' })
  @MinLength(2, {
    message: 'O nome de usuário deve conter mais de 2 caracteres',
  })
  @IsString()
  @IsNotEmpty({ message: 'Insira um nome de usuário' })
  username: string;

  @MaxLength(20, { message: 'A senha deve conter até 20 caracteres' })
  @MinLength(6, { message: 'A senha deve conter mais de 6 caracteres' })
  @IsString()
  @IsNotEmpty({ message: 'Insira uma senha' })
  password: string;
}

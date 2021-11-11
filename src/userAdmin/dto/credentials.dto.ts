import { IsString, Length } from 'class-validator';
import { userAdmin } from '.prisma/client';

export class CredentialsDto {
  @IsString()
  @Length(3, 30)
  username: string;

  @IsString()
  @Length(3, 30)
  password: string;
}

export class credentialsResponse {
  token: string;
  user: userAdmin;
}

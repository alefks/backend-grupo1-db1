import { Prisma, userAdmin } from '.prisma/client';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CredentialsDto, credentialsResponse } from './dto/credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserAdminDto } from './dto/update-user-admin.dto';

@Injectable()
export class UserAdminService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async createUserAdmin(data: Prisma.userAdminCreateInput): Promise<userAdmin> {
    return this.prisma.userAdmin.create({ data });
  }

  async login(data: CredentialsDto): Promise<credentialsResponse> {
    const { username, password } = data;

    const user = await this.prisma.userAdmin.findUnique({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException();
    }
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new UnauthorizedException('invalid-credentials');
    }

    return {
      token: this.jwt.sign({ username }),
      user,
    };
  }

  async deleteOneUserAdmin(
    where: Prisma.userAdminWhereUniqueInput,
  ): Promise<userAdmin> {
    return this.prisma.userAdmin.delete({ where });
  }

  async updateOneUserAdmin(
    userAdminId: number,
    data: UpdateUserAdminDto,
  ): Promise<userAdmin> {
    return this.prisma.userAdmin.update({
      data,
      where: {
        id: userAdminId,
      },
    });
  }
}

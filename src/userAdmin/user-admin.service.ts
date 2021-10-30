import { Prisma, userAdmin } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserAdminService {
  constructor(private prisma: PrismaService) {}

  async createUserAdmin(data: Prisma.userAdminCreateInput): Promise<userAdmin> {
    return this.prisma.userAdmin.create({ data });
  }

  async deleteOneUserAdmin(
    where: Prisma.userAdminWhereUniqueInput,
  ): Promise<userAdmin> {
    return this.prisma.userAdmin.delete({ where });
  }

  async updateOneUserAdmin(
    userAdminId: number,
    data: Prisma.userAdminCreateInput,
  ): Promise<userAdmin> {
    return this.prisma.userAdmin.update({
      data,
      where: {
        id: userAdminId,
      },
    });
  }
}

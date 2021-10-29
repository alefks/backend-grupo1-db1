import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { checkinDate, Prisma } from '.prisma/client';

/* Prisma.checkinDateCreateInput */

@Injectable()
export class CheckinService {
  constructor(private prisma: PrismaService) {}

  async createCheckin(data: Prisma.checkinDateCreateInput) {
    return this.prisma.checkinDate.create({ data });
  }

  async getCheckin(): Promise<checkinDate[]> {
    return this.prisma.checkinDate.findMany();
  }

  async deleteOneCheckin(
    where: Prisma.checkinDateWhereUniqueInput,
  ): Promise<checkinDate> {
    return this.prisma.checkinDate.delete({ where });
  }

  async updateOneCheckin(
    checkinDateId: number,
    data: Prisma.checkinDateCreateInput,
  ): Promise<checkinDate> {
    return this.prisma.checkinDate.update({
      data,
      where: {
        id: checkinDateId,
      },
    });
  }
}

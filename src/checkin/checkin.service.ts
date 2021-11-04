import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { checkinDate, Prisma } from '.prisma/client';
import { CreateCheckinDto } from './dto/create-checkin.dto';

/* Prisma.checkinDateCreateInput */

@Injectable()
export class CheckinService {
  constructor(private prisma: PrismaService) {}

  /* Prisma.checkinDateCreateInput */
  async createCheckin(data: CreateCheckinDto) {
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
}

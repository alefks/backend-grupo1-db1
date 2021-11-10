import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, checkinDate } from '@prisma/client';
import { CreateCheckinDto } from './dto/create-checkin.dto';

@Injectable()
export class CheckinService {
  constructor(private prisma: PrismaService) {}

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

  async deleteAllCheckin() {
    return this.prisma.checkinDate.deleteMany();
  }

  async updateOneCheckinDate(
    checkinId: number,
    data: Prisma.checkinDateUpdateInput,
  ): Promise<checkinDate> {
    return this.prisma.checkinDate.update({
      data,
      where: {
        id: checkinId,
      },
    });
  }
}

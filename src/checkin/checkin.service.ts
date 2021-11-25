import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, checkinDate } from '@prisma/client';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { UpdateCheckinDto } from './dto/update-checkin.dto';

@Injectable()
export class CheckinService {
  constructor(private prisma: PrismaService) {}

  async createCheckin(dto: CreateCheckinDto) {
    const data: Prisma.checkinDateCreateInput = {
      ...dto,

      keyResult: {
        connect: {
          id: dto.keyResult,
        },
      },
    };
    return this.prisma.checkinDate.create({ data });
  }

  async getCheckin(): Promise<checkinDate[]> {
    return this.prisma.checkinDate.findMany();
  }

  async getOneCheckin(id: number) {
    const result = await this.prisma.checkinDate.findUnique({ where: { id } });
    if (!result) throw new NotFoundException('Chekin not found');
    return result;
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
    dto: UpdateCheckinDto,
  ): Promise<checkinDate> {
    const data: Prisma.checkinDateUpdateInput = {
      ...dto,
      keyResult: dto.keyResult
        ? {
            connect: {
              id: dto.keyResult,
            },
          }
        : {},
    };
    return this.prisma.checkinDate.update({
      data,
      where: {
        id: checkinId,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { quarter } from '.prisma/client';
import { CreateQuarterDto } from './dto/create-quarter.dto';
import { UpdateQuarterDto } from './dto/update-quarter.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuarterService {
  constructor(private prisma: PrismaService) {}

  createQuarter(dto: CreateQuarterDto) {
    const data: Prisma.quarterCreateInput = { name: dto.name };
    return this.prisma.quarter.create({ data });
  }

  async getAllQuarters(): Promise<quarter[]> {
    return this.prisma.quarter.findMany();
  }

  async getByIdQuarter(quarterId: number): Promise<quarter> {
    return this.prisma.quarter.findUnique({ where: { id: quarterId } });
  }

  async deleteOneQuarter(
    where: Prisma.quarterWhereUniqueInput,
  ): Promise<quarter> {
    return this.prisma.quarter.delete({ where });
  }

  async DeleteManyQuarters() {
    return this.prisma.quarter.deleteMany();
  }

  async updateOneQuarter(
    quarterId: number,
    data: UpdateQuarterDto,
  ): Promise<quarter> {
    return this.prisma.quarter.update({
      data,
      where: {
        id: quarterId,
      },
    });
  }
}

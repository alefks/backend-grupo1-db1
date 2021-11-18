import { Injectable } from '@nestjs/common';
import { keyResult, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateKeyResultsDto } from './dto/create-keyresults.dto';

@Injectable()
export class KeyResultsService {
  constructor(private prisma: PrismaService) {}

  async getKeyResults(): Promise<keyResult[]> {
    return this.prisma.keyResult.findMany();
  }

  async findOne(id: number) {
    return this.prisma.keyResult.findUnique({
      where: { id },
      include: { checkinDates: true },
    });
  }

  async createKeyResults(dto: CreateKeyResultsDto) {
    const data: Prisma.keyResultCreateInput = {
      ...dto,

      responsible: {
        connect: {
          id: dto.responsible,
        },
      },
      objective: {
        connect: {
          id: dto.objective,
        },
      },
    };
    return this.prisma.keyResult.create({ data });
  }

  async deleteAllKeyResults() {
    return this.prisma.keyResult.deleteMany();
  }

  async deleteOneKeyResult(
    where: Prisma.keyResultWhereUniqueInput,
  ): Promise<keyResult> {
    return this.prisma.keyResult.delete({ where });
  }

  async updateOneKeyResult(id, data) {
    const chekinDates = data.checkinDates?.map((checkinDate) => ({
      id: checkinDate,
    }));

    return await this.prisma.keyResult.update({
      data: {
        ...data,
        checkinDates: {
          connect: chekinDates,
        },
      },
      include: {
        checkinDates: true,
      },

      where: { id },
    });
  }
}

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

  async createKeyResults(dto: CreateKeyResultsDto) {
    const data: Prisma.keyResultCreateInput = {
      ...dto,
      responsible: {
        connect: {
          id: dto.responsible,
        },
      },
      task: {
        connect: {
          id: dto.task,
        },
      },
    };
    return this.prisma.keyResult.create({ data });
  }

  async deleteOneKeyResult(
    where: Prisma.keyResultWhereUniqueInput,
  ): Promise<keyResult> {
    return this.prisma.keyResult.delete({ where });
  }

  async updateOneKeyResult(
    keyResultId: number,
    data: Prisma.taskUpdateInput,
  ): Promise<keyResult> {
    return this.prisma.keyResult.update({
      data,
      where: {
        id: keyResultId,
      },
    });
  }
}
import { Injectable, NotFoundException } from '@nestjs/common';
import { keyResult, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateKeyResultsDto } from './dto/create-keyresults.dto';
import { UpdateKeyResultsDto } from './dto/update-keyresults.dto';

@Injectable()
export class KeyResultsService {
  constructor(private prisma: PrismaService) {}

  async getKeyResults(): Promise<keyResult[]> {
    const result = await this.prisma.keyResult.findMany();
    if (!result)
      throw new NotFoundException('There are not registers KeyResults');
    return result;
  }

  async findOne(id: number) {
    const result = await this.prisma.keyResult.findUnique({
      where: { id },
      include: { checkinDates: true },
    });

    if (!result) throw new NotFoundException('KeyResult not found');
    return result;
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

  async updateOneKeyResult(
    id: number,
    _updateKeyResultsDto: UpdateKeyResultsDto,
  ) {
    const data: Prisma.keyResultUpdateInput = {
      ..._updateKeyResultsDto,
      objective: {
        connect: _updateKeyResultsDto.objective
          ? {
              id: _updateKeyResultsDto.objective,
            }
          : {},
      },

      responsible: _updateKeyResultsDto.responsible
        ? { connect: { id: _updateKeyResultsDto.responsible } }
        : {},
    };
    return this.prisma.keyResult.update({ where: { id }, data });
  }
}

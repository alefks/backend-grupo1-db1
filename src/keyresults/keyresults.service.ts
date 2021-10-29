import { Injectable } from '@nestjs/common';
import { keyResult, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateKeyResultsDto } from './dto/create-keyresults.dto';

@Injectable()
export class KeyResultService {
  constructor(private prisma: PrismaService) {}

  async listAllKeyResult(): Promise<keyResult[]> {
    return this.prisma.keyResult.findMany();
  }

  async createFilme(post: CreateKeyResultsDto) {
    const checkinDates = post.chekinDates?.map((checkinDate) => ({
      id: checkinDate,
    }));

    return this.prisma.keyResult.create({
      data: {
        name: post.name,
        description: post.description,
        goal: post.goal,
        achieved: post.achieved,
        frequency: post.frequency,

        checkinDates: {
          connect: chekinDates,
        },
      },
      include: {
        checkinDates: true,
      },
    });
  }

  async deleteOneFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({ where });
  }

  /*   async updateOneFilme(
    filmeId: number,
    data: Prisma.FilmeCreateInput, 
  ): Promise<Filme> {
    return this.prisma.filme.update({ data, where: { id: filmeId } });
  }*/

  async updateOneFilme(id, data) {
    const participantes = data.participantes?.map((participante) => ({
      id: participante,
    }));
    const generos = data.generos?.map((genero) => ({
      id: genero,
    }));
    return await this.prisma.filme.update({
      data: {
        ...data,
        participantes: {
          connect: participantes,
        },
        generos: {
          connect: generos,
        },
      },
      include: {
        generos: true,
        participantes: true,
      },
      /* ...post,
        id: undefined, */

      where: { id },
    });
  }
}

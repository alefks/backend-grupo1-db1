import { Injectable } from '@nestjs/common';
import { keyResult, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KeyResultsService {
  constructor(private prisma: PrismaService) {}

  async getKeyResults(): Promise<keyResult[]> {
    return this.prisma.keyResult.findMany();
  }

  async createKeyResults(data: Prisma.keyResultCreateInput) {
    return this.prisma.keyResult.create({ data });
  }

  async deleteOneKeyResult(
    where: Prisma.keyResultWhereUniqueInput,
  ): Promise<keyResult> {
    return this.prisma.keyResult.delete({ where });
  }

  async updateOneKeyResult(
    keyResultId: number,
    data: Prisma.keyResultCreateInput,
  ): Promise<keyResult> {
    return this.prisma.keyResult.update({
      data,
      where: {
        id: keyResultId,
      },
    });
  }
}

/*   return this.prisma.keyResult.create({
      data: {
        name: post.name,
        description: post.description,
        goal: post.goal,
        achieved: post.achieved,
        frequency: post.frequency,

        checkinDates: {
          connect: checkinDates,
        },

        include: {
          checkinDates: true,
        
      },
    }
    }); */

/*   async updateOneFilme(
    filmeId: number,
    data: Prisma.FilmeCreateInput, 
  ): Promise<Filme> {
    return this.prisma.filme.update({ data, where: { id: filmeId } });
  }*/

/* async updateOnekeyResult(id, data) {
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
        id: undefined, 

      where: { id },
    });
  } */

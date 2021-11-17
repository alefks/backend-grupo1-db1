import { Injectable } from '@nestjs/common';
import { Prisma, objective } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateObjectiveDto } from './dto/update-objective.dto';
import { CreateObjectiveDto } from './dto/create-objective.dto';

@Injectable()
export class ObjectiveService {
  constructor(private db: PrismaService) {}

  async create(_createObjectiveDto: CreateObjectiveDto): Promise<objective> {
    const data: Prisma.objectiveCreateInput = {
      ..._createObjectiveDto,
      manager: { connect: { id: _createObjectiveDto.manager } },
      team: { connect: { id: _createObjectiveDto.team } },
      relationalObjectives:
        {
          connect: _createObjectiveDto.relationalObjectives?.map((id) => ({
            id,
          })),
        } || {},
    };
    return this.db.objective.create({ data });
  }

  async findAll() {
    return this.db.objective.findMany();
  }

  async findOne(id: number) {
    return this.db.objective.findUnique({
      where: { id },
      include: { keyResults: true },
    });
  }

  // async findByQuarter(quarter_year: number, quarter_id: number) {
  //   let where;
  //   switch (quarter_id) {
  //     case 1:
  //       where = {
  //         endDate: {
  //           lte: new Date(quarter_year, 3, 31),
  //         },
  //       };
  //     case 2:
  //       where = {
  //         endDate: {
  //           lte: new Date(quarter_year, 6, 30),
  //         },
  //       };

  //     case 3:
  //       where = {
  //         endDate: {
  //           lte: new Date(quarter_year, 9, 30),
  //         },
  //       };

  //     case 4:
  //       where = {
  //         endDate: {
  //           lte: new Date(quarter_year, 12, 31),
  //         },
  //       };
  //   }
  //   return where;
  // }

  // async findByQuarter() {
  //   const result = await this.db.objective.findMany({
  //     where: {
  //       endDate: {
  //         lte: new Date('2021-11-14T19:10:00.000Z'),
  //       },
  //     },
  //   });
  //   return result;
  // }

  async update(id: number, _updateObjectiveDto: UpdateObjectiveDto) {
    const data: Prisma.objectiveUpdateInput = {
      ..._updateObjectiveDto,
      manager: _updateObjectiveDto.manager
        ? { connect: { id: _updateObjectiveDto.manager } }
        : {},
      team: _updateObjectiveDto.team
        ? { connect: { id: _updateObjectiveDto.team } }
        : {},
      relationalObjectives:
        {
          connect: _updateObjectiveDto.relationalObjectives?.map((id) => ({
            id,
          })),
        } || {},
    };
    return this.db.objective.update({ where: { id }, data });
  }

  async deleteOneObjective(where: Prisma.objectiveWhereUniqueInput) {
    return this.db.objective.delete({ where });
  }

  async deleteAllObjectives() {
    return this.db.objective.deleteMany();
  }
}

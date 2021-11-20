import { Injectable, NotFoundException } from '@nestjs/common';
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
    const result = await this.db.objective.findMany();
    if (!result)
      throw new NotFoundException('There are not registers Objectives');
    return result;
  }

  async findOne(id: number) {
    const result = await this.db.objective.findUnique({
      where: { id },
      include: { keyResults: true },
    });
    if (!result) throw new NotFoundException('Objective not found');
    return result;
  }

  async findByQuarter(quarter_year: number, quarter_id: number) {
    let lteMonth;
    let gteMonth;
    switch (quarter_id) {
      case 1:
        lteMonth = 3;
        gteMonth = 0;
        break;

      case 2:
        lteMonth = 6;
        gteMonth = 3;
        break;

      case 3:
        lteMonth = 9;
        gteMonth = 6;
        break;

      case 4:
        lteMonth = 12;
        gteMonth = 9;

        break;

      default:
        throw new NotFoundException('Quarter not found');
        break;
    }
    const result = await this.db.objective.findMany({
      where: {
        AND: [
          {
            endDate: {
              lte: new Date(quarter_year, lteMonth),
            },
          },
          {
            endDate: {
              gte: new Date(quarter_year, gteMonth),
            },
          },
        ],
      },
    });
    return result;
  }

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

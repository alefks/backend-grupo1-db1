import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
      name: _createObjectiveDto.name.trim(),
      description: _createObjectiveDto.description.trim(),
      manager: { connect: { id: _createObjectiveDto.manager } },
      team: { connect: { id: _createObjectiveDto.team } },
      relationalObjectives:
        {
          connect: _createObjectiveDto.relationalObjectives?.map((id) => ({
            id,
          })),
        } || {},
    };

    const objectiveCheck = await this.db.objective.findMany({
      where: {
        AND: [
          { name: _createObjectiveDto.name.trim() },
          { teamId: _createObjectiveDto.team },
        ],
      },
    });

    if (objectiveCheck.length) {
      throw new BadRequestException('Já existe um objeto com esse nome');
    } else {
      return this.db.objective.create({ data });
    }
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
      include: {
        keyResults: { include: { responsible: { select: { name: true } } } },
      },
    });
    if (!result) throw new NotFoundException('Objective not found');
    return result;
  }

  async findSelfRelation(id: number) {
    const result = await this.db.objective.findUnique({
      where: { id },
      select: {
        relatedObjectives: {
          select: {
            id: true,
            name: true,
            team: { select: { name: true } },
          },
        },
      },
    });
    if (!result) throw new NotFoundException('Objective not found');
    return result;
  }

  async findByQuarter(
    quarter_year: number,
    quarter_id: number,
    teamId: number,
  ) {
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
          { teamId },
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
      include: {
        manager: { select: { name: true } },
        keyResults: true,
      },
    });
    return result;
  }

  async update(id: number, _updateObjectiveDto: UpdateObjectiveDto) {
    const disconnectObjective = _updateObjectiveDto.disconnectObjective;
    _updateObjectiveDto.disconnectObjective &&
      delete _updateObjectiveDto.disconnectObjective;

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
          connect:
            _updateObjectiveDto.relationalObjectives?.map((id) => ({
              id,
            })) || [],
          disconnect:
            (disconnectObjective && { id: disconnectObjective }) || [],
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

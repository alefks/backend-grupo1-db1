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
      manager: { connect: { id: _createObjectiveDto.managerId } },
      team: { connect: { id: _createObjectiveDto.teamID } },
      relationalObjectives:
        {
          connect: _createObjectiveDto.relationalObjectives?.map((id) => ({
            id,
          })),
        } || {},
      quarters: {
        connect: _createObjectiveDto.quarters?.map((id) => ({ id })),
      },
    };
    return this.db.objective.create({ data });
  }

  findAll() {
    return this.db.objective.findMany;
  }

  findOne(id: number) {
    return this.db.objective.findUnique({ where: { id } });
  }

  update(id: number, _updateObjectiveDto: UpdateObjectiveDto) {
    const data: Prisma.objectiveUpdateInput = {
      ..._updateObjectiveDto,
      manager: { connect: { id: _updateObjectiveDto.managerId } },
      team: { connect: { id: _updateObjectiveDto.teamID } },
      relationalObjectives:
        {
          connect: _updateObjectiveDto.relationalObjectives?.map((id) => ({
            id,
          })),
        } || {},
      quarters: {
        connect: _updateObjectiveDto.quarters?.map((id) => ({ id })),
      },
    };
    return this.db.objective.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.db.objective.delete({ where: { id } });
  }
}

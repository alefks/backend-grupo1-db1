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
    return this.db.objective.findUnique({ where: { id } });
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

  async remove(id: number) {
    return this.db.objective.delete({ where: { id } });
  }
}

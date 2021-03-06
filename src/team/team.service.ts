import { Prisma, team } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async createTeam(dto: CreateTeamDto) {
    const data: Prisma.teamCreateInput = { name: dto.name };
    return this.prisma.team.create({ data });
  }

  async getAllTeams(): Promise<team[]> {
    const result = await this.prisma.team.findMany();
    if (!result) throw new NotFoundException('There are not registers Teams');
    return result;
  }

  async getByIdTeam(teamId: number): Promise<team> {
    const result = await this.prisma.team.findUnique({
      where: { id: teamId },
      include: { objectives: true, teamPartners: true },
    });

    if (!result) throw new NotFoundException('Team not found');
    return result;
  }

  async deleteOneTeam(where: Prisma.teamWhereUniqueInput): Promise<team> {
    return this.prisma.team.delete({ where });
  }

  async DeleteManyTeams() {
    return this.prisma.team.deleteMany();
  }

  async update(id: number, dto: UpdateTeamDto) {
    const data: Prisma.teamUpdateInput = {
      ...dto,
      teamPartners:
        {
          connect: dto.teamPartners?.map((id) => ({
            id,
          })),
        } || {},
    };
    return this.prisma.team.update({ where: { id }, data });
  }
}

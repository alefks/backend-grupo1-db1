import { Prisma, teamPartner } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeamPartnerDto } from './dto/create-team-partner.dto';
import { UpdateTeamPartnerDto } from './dto/update-team-partner.dto';

@Injectable()
export class TeamPartnerService {
  constructor(private prisma: PrismaService) {}

  async createTeamPartner(dto: CreateTeamPartnerDto) {
    const data: Prisma.teamPartnerCreateInput = {
      ...dto,
      team: dto.teamId
        ? {
            connect: {
              id: dto.teamId,
            },
          }
        : {},
    };
    return this.prisma.teamPartner.create({ data });
  }

  async getTeamPartner(): Promise<teamPartner[]> {
    return this.prisma.teamPartner.findMany();
  }

  async getOneTeamPartner(teamPartnerId: number): Promise<teamPartner> {
    return this.prisma.teamPartner.findUnique({
      where: {
        id: teamPartnerId,
      },
    });
  }

  async deleteAllTeamPartners() {
    return this.prisma.teamPartner.deleteMany();
  }

  async deleteOneTeamPartner(
    where: Prisma.teamPartnerWhereUniqueInput,
  ): Promise<teamPartner> {
    return this.prisma.teamPartner.delete({ where });
  }

  async updateOneTeamPartner(
    teamPartnerId: number,
    dto: UpdateTeamPartnerDto,
  ): Promise<teamPartner> {
    const data: Prisma.teamPartnerUpdateInput = {
      ...dto,
      team: dto.teamId
        ? {
            connect: {
              id: dto.teamId,
            },
          }
        : {},
    };

    return this.prisma.teamPartner.update({
      data,
      where: {
        id: teamPartnerId,
      },
    });
  }
}

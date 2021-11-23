import { Prisma, teamPartner } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTeamPartnerDto } from './dto/create-team-partner.dto';
import { UpdateTeamPartnerDto } from './dto/update-team-partner.dto';

@Injectable()
export class TeamPartnerService {
  constructor(private prisma: PrismaService) {}

  async createTeamPartner(dto: CreateTeamPartnerDto) {
    const data: Prisma.teamPartnerCreateInput = {
      ...dto,
      team:
        {
          connect: dto.team?.map((id) => ({ id })),
        } || {},
    };
    return this.prisma.teamPartner.create({ data });
  }

  async getTeamPartner(): Promise<teamPartner[]> {
    const result = await this.prisma.teamPartner.findMany();
    if (!result)
      throw new NotFoundException('There are not registers TeamPartners');
    return result;
  }

  async getOneTeamPartner(teamPartnerId: number): Promise<teamPartner> {
    const result = await this.prisma.teamPartner.findUnique({
      where: {
        id: teamPartnerId,
      },
    });
    if (!result) throw new NotFoundException('TeamPartner not found');
    return result;
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
      team:
        {
          connect: dto.team?.map((id) => ({ id })),
        } || {},
    };

    return this.prisma.teamPartner.update({
      data,
      where: {
        id: teamPartnerId,
      },
    });
  }
}

import { teamPartner } from '@prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTeamPartnerDto } from './dto/create-team-partner.dto';
import { UpdateTeamPartnerDto } from './dto/update-team-partner.dto';
import { TeamPartnerService } from './team-partners.service';

@Controller('team-partner')
export class TeamPartnerController {
  constructor(private teamPartnerService: TeamPartnerService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() dto: CreateTeamPartnerDto): Promise<teamPartner> {
    return this.teamPartnerService.createTeamPartner(dto);
  }

  @Get('')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<teamPartner[]> {
    return this.teamPartnerService.getTeamPartner();
  }

  @Get('/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.teamPartnerService.getOneTeamPartner(id);
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteMany() {
    return this.teamPartnerService.deleteAllTeamPartners();
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.teamPartnerService.deleteOneTeamPartner({ id: Number(id) });
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() dto: UpdateTeamPartnerDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<teamPartner> {
    return this.teamPartnerService.updateOneTeamPartner(id, dto);
  }
}

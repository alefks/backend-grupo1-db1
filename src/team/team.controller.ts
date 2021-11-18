import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('create')
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.createTeam(createTeamDto);
  }

  @Get()
  GetAllTeams() {
    return this.teamService.getAllTeams();
  }

  @Get(':id')
  findOneTeam(@Param('id') id: number) {
    return this.teamService.getByIdTeam(id);
  }

  @Get('find-objectives/:id')
  findOneTeamObjectives(@Param('id') id: number) {
    return this.teamService.getByIdTeamObjectives(id);
  }

  @Get('find-team-partners/:id')
  findOneTeamTeamPartners(@Param('id') id: number) {
    return this.teamService.getByIdTeamTeamPartners(id);
  }

  @Patch('/update/:id')
  updateOneTeam(@Param('id') id: number, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(id, updateTeamDto);
  }

  @Delete('/delete/:id')
  deleteOneTeam(@Param('id') id: number) {
    return this.teamService.deleteOneTeam({ id: Number(id) });
  }

  @Delete('/delete')
  deleteAllTeams() {
    return this.teamService.DeleteManyTeams();
  }
}

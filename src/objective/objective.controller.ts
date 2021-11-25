import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ObjectiveService } from './objective.service';
import { CreateObjectiveDto } from './dto/create-objective.dto';
import { UpdateObjectiveDto } from './dto/update-objective.dto';

@Controller('objective')
export class ObjectiveController {
  constructor(private readonly objectiveService: ObjectiveService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  async create(@Body() createObjectiveDto: CreateObjectiveDto) {
    return this.objectiveService.create(createObjectiveDto);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async findAll() {
    return this.objectiveService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id') id: string) {
    return this.objectiveService.findOne(+id);
  }

  @Get('lista/:id')
  @UsePipes(ValidationPipe)
  async findSelfRelation(@Param('id') id: string) {
    return this.objectiveService.findSelfRelation(+id);
  }

  @Get(':teamid/:year/:id')
  @UsePipes(ValidationPipe)
  async findByQuarter(
    @Param('year') year: number,
    @Param('id') id: number,
    @Param('teamid') teamid: number,
  ) {
    return this.objectiveService.findByQuarter(year, id, teamid);
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() updateObjectiveDto: UpdateObjectiveDto,
  ) {
    return this.objectiveService.update(+id, updateObjectiveDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete/:id')
  @UsePipes(ValidationPipe)
  async deleteOne(@Param('id') id: string) {
    return this.objectiveService.deleteOneObjective({ id: Number(id) });
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete')
  @UsePipes(ValidationPipe)
  async deleteAll() {
    return this.objectiveService.deleteAllObjectives();
  }
}

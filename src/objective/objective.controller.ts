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

  // @Get('findByQuarter/:quarter_date/')
  // @UsePipes(ValidationPipe)
  // async findByQuarter(@Param('quarter_date') quarter_date: Date) {
  //   return this.objectiveService.findByQuarter();
  // }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() updateObjectiveDto: UpdateObjectiveDto,
  ) {
    return this.objectiveService.update(+id, updateObjectiveDto);
  }

  @Delete('delete/:id')
  @UsePipes(ValidationPipe)
  async deleteOne(@Param('id') id: string) {
    return this.objectiveService.deleteOneObjective({ id: Number(id) });
  }

  @Delete('delete')
  @UsePipes(ValidationPipe)
  async deleteAll() {
    return this.objectiveService.deleteAllObjectives();
  }
}

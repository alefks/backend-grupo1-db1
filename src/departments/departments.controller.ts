import {
  Controller,
  Body,
  Get,
  Post,
  Delete,
  Param,
  Put,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { DepartmentsService } from './departments.service';
import { department } from '.prisma/client';

@Controller('departments')
export class DepartmentsController {
  constructor(private departmentsService: DepartmentsService) {}

  @Get()
  @UsePipes(ValidationPipe)
  async findMany(): Promise<department[]> {
    return this.departmentsService.getAllDepartments();
  }

  @Get('/list/:id')
  @UsePipes(ValidationPipe)
  async findUnique(@Param('id', ParseIntPipe) id: number) {
    return this.departmentsService.getOneDepartment(id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createDepartment: CreateDepartmentDto,
  ): Promise<department> {
    return this.departmentsService.createDepartment(createDepartment);
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateDepartment: CreateDepartmentDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<department> {
    return this.departmentsService.updateOneDepartment(id, updateDepartment);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.departmentsService.deleteOneDepartment({ id: Number(id) });
  }

  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteMany() {
    return this.departmentsService.deleteAllDepartments();
  }
}

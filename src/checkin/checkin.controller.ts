import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  Patch,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { checkinDate } from '.prisma/client';
import { CheckinService } from './checkin.service';
import { UpdateCheckinDto } from './dto/update-checkin.dto';

@Controller('checkin')
export class checkinController {
  constructor(private checkinService: CheckinService) {}

  @Get('')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<checkinDate[]> {
    return this.checkinService.getCheckin();
  }

  @Get(':id')
  getOneCheckin(@Param('id') id: string) {
    return this.checkinService.getOneCheckin(+id);
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createCheckinDto: CreateCheckinDto,
  ): Promise<checkinDate> {
    return this.checkinService.createCheckin(createCheckinDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.checkinService.deleteOneCheckin({ id: Number(id) });
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/delete')
  @UsePipes(ValidationPipe)
  async deleteAll() {
    return this.checkinService.deleteAllCheckin();
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateCheckin: UpdateCheckinDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<checkinDate> {
    return this.checkinService.updateOneCheckinDate(id, updateCheckin);
  }
}

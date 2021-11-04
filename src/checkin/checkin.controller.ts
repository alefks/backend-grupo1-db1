import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CreateCheckinDto } from './dto/create-checkin.dto';
import { checkinDate } from '.prisma/client';
import { CheckinService } from './checkin.service';

@Controller('checkin')
export class checkinController {
  constructor(private checkinService: CheckinService) {}

  @Get('/lista')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<checkinDate[]> {
    return this.checkinService.getCheckin();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createCheckinDto: CreateCheckinDto,
  ): Promise<checkinDate> {
    return this.checkinService.createCheckin(createCheckinDto);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.checkinService.deleteOneCheckin({ id: Number(id) });
  }
}

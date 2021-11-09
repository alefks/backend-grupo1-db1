import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuarterService } from './quarter.service';
import { CreateQuarterDto } from './dto/create-quarter.dto';
import { UpdateQuarterDto } from './dto/update-quarter.dto';

@Controller('quarter')
export class QuarterController {
  constructor(private readonly quarterService: QuarterService) {}

  @Post()
  create(@Body() createQuarterDto: CreateQuarterDto) {
    return this.quarterService.createQuarter(createQuarterDto);
  }

  @Get()
  GetAllQuarters() {
    return this.quarterService.getAllQuarters();
  }

  @Get(':id')
  findOneQuarter(@Param('id') id: number) {
    return this.quarterService.getByIdQuarter(id);
  }

  @Patch(':id')
  updateOneQuarter(
    @Param('id') id: number,
    @Body() updateQuarterDto: UpdateQuarterDto,
  ) {
    return this.quarterService.updateOneQuarter(id, updateQuarterDto);
  }

  @Delete(':id')
  deleteOneQuarter(@Param('id') id: number) {
    return this.quarterService.deleteOneQuarter({ id: Number(id) });
  }

  @Delete('/deleteall')
  deleteAllQuarters() {
    return this.quarterService.DeleteManyQuarters();
  }
}

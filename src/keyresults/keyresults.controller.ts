import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CreateKeyResultsDto } from './dto/create-keyresults.dto';
import { keyResult } from '.prisma/client';
import { KeyResultsService } from './keyresults.service';

@Controller('keyresults')
export class KeyResultsController {
  constructor(private keyResultsService: KeyResultsService) {}

  @Get('/lista')
  @UsePipes(ValidationPipe)
  async findMany(): Promise<keyResult[]> {
    return this.keyResultsService.getKeyResults();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createKeyResultsDto: CreateKeyResultsDto,
  ): Promise<keyResult> {
    return this.keyResultsService.createKeyResults(createKeyResultsDto);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.keyResultsService.deleteOneKeyResult({ id: Number(id) });
  }

  @Delete('/delete/all')
  @UsePipes(ValidationPipe)
  async deleteAll() {
    return this.keyResultsService.deleteAllKeyResults();
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateKeyResult: CreateKeyResultsDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<keyResult> {
    return this.keyResultsService.updateOneKeyResult(id, updateKeyResult);
  }
}

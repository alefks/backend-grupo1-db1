import { Module } from '@nestjs/common';
import { KeyResultsController } from './keyresults.controller';
import { KeyResultsService } from './keyresults.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [KeyResultsService, PrismaService],
  controllers: [KeyResultsController],
})
export class KeyresultsModule {}
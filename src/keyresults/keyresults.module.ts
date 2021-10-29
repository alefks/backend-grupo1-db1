import { Module } from '@nestjs/common';
import { KeyResultsController } from './keyresults.controller';
import { KeyResultsService } from './keyresults.service';

@Module({
  providers: [KeyResultsService],
  controllers: [KeyResultsController],
})
export class KeyresultsModule {}

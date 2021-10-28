import { Module } from '@nestjs/common';
import { KeyresultsService } from './keyresults.service';
import { KeyresultsController } from './keyresults.controller';

@Module({
  providers: [KeyresultsService],
  controllers: [KeyresultsController],
})
export class KeyresultsModule {}

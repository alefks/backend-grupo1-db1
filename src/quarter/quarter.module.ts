import { Module } from '@nestjs/common';
import { QuarterService } from './quarter.service';
import { QuarterController } from './quarter.controller';

@Module({
  controllers: [QuarterController],
  providers: [QuarterService],
})
export class QuarterModule {}

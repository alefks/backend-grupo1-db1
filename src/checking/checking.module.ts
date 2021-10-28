import { Module } from '@nestjs/common';
import { CheckingController } from './checking.controller';
import { CheckingService } from './checking.service';

@Module({
  controllers: [CheckingController],
  providers: [CheckingService],
})
export class CheckingModule {}

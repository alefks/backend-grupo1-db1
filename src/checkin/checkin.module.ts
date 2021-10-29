import { Module } from '@nestjs/common';
import { CheckinService } from './checkin.service';
import { checkinController } from './checkin.controller';

@Module({
  providers: [CheckinService],
  controllers: [checkinController],
})
export class CheckinModule {}

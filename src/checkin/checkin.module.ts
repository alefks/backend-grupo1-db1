import { Module } from '@nestjs/common';
import { CheckinService } from './checkin.service';
import { checkinController } from './checkin.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CheckinService, PrismaService],
  controllers: [checkinController],
})
export class CheckinModule
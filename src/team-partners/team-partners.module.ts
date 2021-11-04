import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TeamPartnerController } from './team-partners.controller';
import { TeamPartnerService } from './team-partners.service';

@Module({
  imports: [PrismaModule],
  controllers: [TeamPartnerController],
  providers: [TeamPartnerService],
})
export class TeamPartnerModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { KeyresultsModule } from './keyresults/keyresults.module';
import { CheckinModule } from './checkin/checkin.module';
import { TeamPartnerModule } from './team-partners/team-partners.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    PrismaModule,
    KeyresultsModule,
    CheckinModule,
    TeamPartnerModule,
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

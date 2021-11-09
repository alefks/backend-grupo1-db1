import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { KeyresultsModule } from './keyresults/keyresults.module';
import { CheckinModule } from './checkin/checkin.module';
import { TeamPartnerModule } from './team-partners/team-partners.module';
import { TeamModule } from './team/team.module';
import { QuarterModule } from './quarter/quarter.module';

@Module({
  imports: [
    PrismaModule,
    TasksModule,
    KeyresultsModule,
    CheckinModule,
    TeamPartnerModule,
    TeamModule,
    QuarterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

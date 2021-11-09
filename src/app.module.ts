import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PerspectivesModule } from './perspectives/perspectives.module';
import { TasksModule } from './tasks/tasks.module';
import { DepartmentsModule } from './departments/departments.module';
import { KeyresultsModule } from './keyresults/keyresults.module';
import { CheckinModule } from './checkin/checkin.module';
import { TeamPartnerModule } from './team-partners/team-partners.module';
import { ObjectiveModule } from './objective/objective.module';

@Module({
  imports: [
    PrismaModule,
    PerspectivesModule,
    TasksModule,
    DepartmentsModule,
    KeyresultsModule,
    CheckinModule,
    TeamPartnerModule,
    ObjectiveModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

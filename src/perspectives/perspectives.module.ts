import { Module } from '@nestjs/common';
import { PerspectivesController } from './perspectives.controller';
import { PerspectivesService } from './perspectives.service';

@Module({
  controllers: [PerspectivesController],
  providers: [PerspectivesService]
})
export class PerspectivesModule {}

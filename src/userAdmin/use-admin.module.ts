import { Module } from '@nestjs/common';
import { UserAdminController } from './user-admin.controller';
import { UserAdminService } from './user-admin.service';

@Module({
  controllers: [UserAdminController],
  providers: [UserAdminService],
})
export class UserAdminModule {}

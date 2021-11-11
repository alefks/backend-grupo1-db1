import { PartialType } from '@nestjs/mapped-types';
import { UserAdminDto } from './create-userAdmin.dto';

export class UpdateUserAdminDto extends PartialType(UserAdminDto) {}

import { userAdmin } from '.prisma/client';
import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserAdminDto } from './dto/create-userAdmin.dto';
import { CredentialsDto, credentialsResponse } from './dto/credentials.dto';
import { UpdateUserAdminDto } from './dto/update-user-admin.dto';
import { UserAdminService } from './user-admin.service';

@Controller('user-admin')
export class UserAdminController {
  constructor(private userAdminService: UserAdminService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createUserAdmin: UserAdminDto): Promise<userAdmin> {
    return this.userAdminService.createUserAdmin(createUserAdmin);
  }

  @Post('/login')
  login(@Body() data: CredentialsDto): Promise<credentialsResponse> {
    return this.userAdminService.login(data);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.userAdminService.deleteOneUserAdmin({ id: Number(id) });
  }

  @Patch('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateUserAdmin: UpdateUserAdminDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<userAdmin> {
    return this.userAdminService.updateOneUserAdmin(id, updateUserAdmin);
  }
}

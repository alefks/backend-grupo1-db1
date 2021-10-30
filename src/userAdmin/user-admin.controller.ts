import { userAdmin } from '.prisma/client';
import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserAdminDto } from './dto/create-userAdmin.dto';
import { UserAdminService } from './user-admin.service';

@Controller('departments')
export class UserAdminController {
  constructor(private userAdminService: UserAdminService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createUserAdmin: UserAdminDto): Promise<userAdmin> {
    return this.userAdminService.createUserAdmin(createUserAdmin);
  }

  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: string) {
    return this.userAdminService.deleteOneUserAdmin({ id: Number(id) });
  }

  @Put('/update/:id')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateUserAdmin: UserAdminDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<userAdmin> {
    return this.userAdminService.updateOneUserAdmin(id, updateUserAdmin);
  }
}

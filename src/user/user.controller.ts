import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { RoleGuard } from '../guards/role.guard';
import { Roles } from '../guards/roles.decorator';
import { Role } from '../guards/roles.enum';
import { HttpExceptionFilter } from '../filters/http-exception/http-exception.filter';
import { User } from './user.schema';

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)
  async addUser(@Body() data: Partial<User>) {
    return this.userService.createUser(data);
  }

  @Get()
  async getUser() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: Partial<User>) {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  // @Get(':id')
  // getUserById(@Param('id', ParseIntPipe) id: number) {
  //   return this.userService.findUserById(id);
  // }

  // @Post()
  // @UseGuards(RoleGuard)
  // @Roles(Role.Admin)
  // createUser(@Body() CreateUserDto: CreateUserDto) {
  //   return this.userService.createUser(CreateUserDto);
  // }

  // @Put(':id')
  // updateUser(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
  //   return this.userService.updateUser(id, UpdateUserDto);
  // }

  // @Delete(':id')
  // @UseGuards(RoleGuard)
  // deleteUser(@Param('id') id: number) {
  //   return this.userService.delete(id);
  // }
}

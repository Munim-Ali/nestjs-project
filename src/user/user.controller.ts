import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Query('name') name: string) {
    return this.userService.findAllUsers(name);
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.findUserById(id);
  }

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.createUser(CreateUserDto);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, UpdateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}

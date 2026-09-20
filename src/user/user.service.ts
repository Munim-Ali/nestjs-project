import { Injectable, NotFoundException } from '@nestjs/common';
import { UserLoggerService } from './user.logger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';

// export interface User {
//   id: number;
//   name: string;
// }

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(data: Partial<User>): Promise<User> {
    const newUser = new this.userModel(data);
    return newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async updateUser(id: string, data: Partial<User>): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  // findAllUsers(name: string = '') {
  //   // this.logger.log('Finding all users');
  //   return this.users.filter((user) =>
  //     user.name.toLowerCase().includes(name.toLowerCase()),
  //   );
  // }

  // findUserById(id: number) {
  //   // this.logger.log(`Finding user with id: ${id}`);
  //   const user = this.users.find((user) => {
  //     return user.id === id;
  //   });

  //   if (!user) {
  //     throw new NotFoundException(`User with id ${id} not found`);
  //   }

  //   return user;
  // }

  // createUser(createUserDto: CreateUserDto) {
  //   // this.logger.log(`Creating user with id: ${createUserDto.id}`);
  //   const newUser: User = {
  //     id: this.users.length + 1,
  //     name: createUserDto.name,
  //   };
  //   this.users.push(newUser);
  //   return { data: newUser, message: 'User created successfully' };
  // }

  // updateUser(id: number, updateUserDto: UpdateUserDto) {
  //   // this.logger.log(`Updateing user with id: ${id}`);

  //   const index = this.users.findIndex((user) => user.id === id);
  //   if (index === -1) {
  //     return null;
  //   }

  //   this.users[index] = { ...this.users[index], ...updateUserDto };
  //   return this.users[index];
  // }

  // delete(id: number) {
  //   // this.logger.log(`Deleting user with id: ${id}`);

  //   const index = this.users.findIndex((user) => user.id === id);
  //   if (index === -1) {
  //     return null;
  //   }

  //   const [deleted] = this.users.splice(index, 1);

  //   return deleted;
  // }
}

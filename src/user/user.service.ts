import { Injectable } from '@nestjs/common';
import { UserLoggerService } from './user.logger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export interface User {
  id: number;
  name: string;
}

@Injectable()
export class UserService {
  constructor(private readonly logger: UserLoggerService) {}
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Alex',
    },
  ];

  findAllUsers(name: string = '') {
    this.logger.log('Finding all users');
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  findUserById(id: number) {
    this.logger.log(`Finding user with id: ${id}`);
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    this.logger.log(`Creating user with id: ${createUserDto.id}`);
    const newUser: User = {
      id: this.users.length + 1,
      name: createUserDto.name,
    };
    this.users.push(newUser);
    return { data: newUser, message: 'User created successfully' };
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    this.logger.log(`Updateing user with id: ${id}`);

    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      return null;
    }

    this.users[index] = { ...this.users[index], ...updateUserDto };
    return this.users[index];
  }

  delete(id: number) {
    this.logger.log(`Deleting user with id: ${id}`);

    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      return null;
    }

    const [deleted] = this.users.splice(index, 1);

    return deleted;
  }
}

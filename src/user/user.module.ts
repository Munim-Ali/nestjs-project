import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserLoggerService } from './user.logger';

@Module({
  controllers: [UserController],
  providers: [UserService, UserLoggerService],
})
export class UserModule {}

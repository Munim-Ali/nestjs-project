import { Module } from '@nestjs/common';
import { CourcesService } from './cources.service';
import { CourcesController } from './cources.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './schemas/courses.schema';
import { User, UserSchema } from '../user/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [CourcesService],
  controllers: [CourcesController],
})
export class CourcesModule {}

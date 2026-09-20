import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Course } from './schemas/courses.schema';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/user.schema';

@Injectable()
export class CourcesService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<Course>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async createCourse(data: Partial<Course>): Promise<Course> {
    if (!data.instructor) {
      throw new NotFoundException('Course instructor is required');
    }

    const instructor = await this.userModel.findById(data.instructor).exec();
    if (!instructor) {
      throw new NotFoundException('Instructor not found');
    }

    const course = await new this.courseModel({
      name: data.name,
      description: data.description,
      instructor: instructor._id,
    }).save();
    return course;
  }

  async getAllCourses(): Promise<Course[]> {
    return this.courseModel.find().populate('instructor').exec();
  }
}

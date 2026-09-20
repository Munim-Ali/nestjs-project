import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schema/student.schema';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) {}

  async createStudent(data: Partial<Student>): Promise<Student> {
    const student = new this.studentModel({
      name: data.name,
      address: {
        city: data?.address?.city,
        country: data?.address?.country,
      },
    });
    return student.save();
  }

  async findAllStudents(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }
}

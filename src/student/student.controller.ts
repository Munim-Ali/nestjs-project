import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './schema/student.schema';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }

  @Get()
  async findAllStudents() {
    return this.studentService.findAllStudents();
  }
}

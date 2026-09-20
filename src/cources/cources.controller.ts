import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourcesService } from './cources.service';
import { Course } from './schemas/courses.schema';

@Controller('cources')
export class CourcesController {
  constructor(private readonly courceService: CourcesService) {}

  @Post()
  async createCourse(@Body() data: Partial<Course>) {
    return this.courceService.createCourse(data);
  }

  @Get()
  async getCourses() {
    return this.courceService.getAllCourses();
  }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from 'src/entities/student.entity';

@Controller('student')
export class StudentController {
    constructor(private readonly studentsService: StudentService) {}

    @Post()
    async addStudent(@Body() studentData: Partial<Student>): Promise<Student> {
      return this.studentsService.addStudent(studentData);
    }
    @Get()
    async findAll(): Promise<Student[]> {
      return this.studentsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Student | null> {
      return this.studentsService.findOne(parseInt(id, 10));
    }

    @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.studentsService.remove(parseInt(id, 10));
  }

  @Put(':id') 
    async update(@Param('id') id: string, @Body() studentData: Partial<Student>): Promise<Student | null> {
      return this.studentsService.update(parseInt(id, 10), studentData);
    }
}

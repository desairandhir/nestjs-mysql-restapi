import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { StudentService } from './student.service';
import { Students } from 'src/entities/student.entity';
import { CreateStudentDto } from 'src/dto/student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentsService: StudentService) {}

    @Post()
    async addStudent(@Body(new ValidationPipe()) createStudentDto:CreateStudentDto) {
      return this.studentsService.addStudent(createStudentDto);
    }

    @Get()
    async findAll() {
      return this.studentsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.studentsService.findOne(parseInt(id, 10));
    }

    @Delete(':id')
  async remove(@Param('id') id: string){
    await this.studentsService.remove(parseInt(id, 10));
  }

  @Put(':id') 
    async update(@Param('id') id: string, @Body(new ValidationPipe()) createStudentDto: CreateStudentDto) {
      return this.studentsService.update(parseInt(id, 10), createStudentDto);
    }
    
}

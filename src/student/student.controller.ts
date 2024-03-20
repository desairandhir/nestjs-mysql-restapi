import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, UseGuards, ValidationPipe ,Request} from '@nestjs/common';

import { StudentService } from './student.service';
import { CreateStudentDto } from 'src/dto/student.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Controller('student')
export class StudentController {

  constructor(private readonly studentsService: StudentService,
    ) {}
    // private readonly authService: AuthService
    
  @Post()
  @UseGuards(AuthGuard("local"))
  async addStudent(@Request() req, @Body(new ValidationPipe()) createStudentDto: CreateStudentDto) {
    const data = await this.studentsService.addStudent(createStudentDto);
    //  const user=this.authService.generateToken(req.user);
    const result= {
      isSuccess: true,
      statusCode: HttpStatus.CREATED,
      error: '',
      // user,
      data,
    };
    return result;
  }

  @Get()
  async findAll() {
    try {
      const data = await this.studentsService.findAll();
      return {
        isSuccess: true,
        statusCode: HttpStatus.OK,
        error: '',
        data,
      };
    } catch (error) {
      return {
        isSuccess: false,
        statusCode: 500,
        error: 'An error occurred',
        data: null,
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const student = await this.studentsService.findOne(parseInt(id, 10));
      return {
        isSuccess: true,
        statusCode: HttpStatus.OK,
        error: '',
        data: student,
      };
    } catch (error) {
      return {
        isSuccess: false,
        statusCode: 500,
        error: 'An error occurred',
        data: null,
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.studentsService.remove(parseInt(id, 10));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe()) createStudentDto: CreateStudentDto) {
    const updateStudent = this.studentsService.update(parseInt(id, 10), createStudentDto);
    return updateStudent;
  }
}

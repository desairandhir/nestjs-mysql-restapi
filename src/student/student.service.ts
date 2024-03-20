import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from 'src/entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Students)
    private studentRepository: Repository<Students>
  ) { }

  async addStudent(studentData: Partial<Students>) {
    const newStudent = this.studentRepository.create(studentData);
    return this.studentRepository.save(newStudent);
  }

  findAll() {
    return this.studentRepository.find();
  }

  findOne(id: number) {
    return this.studentRepository.findOneBy({ id });
  }

  async remove(id: number) {
    this.studentRepository.delete(id);
  }

  async update(id: number, newData: Partial<Students>) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      return null;
    }
    Object.assign(student, newData);
    return await this.studentRepository.save(student);
  }
}

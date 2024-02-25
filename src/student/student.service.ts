import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
      ) {}

      async addStudent(studentData: Partial<Student>): Promise<Student> {
        const newStudent = this.studentRepository.create(studentData);
        return this.studentRepository.save(newStudent);
      }

      findAll(): Promise<Student[]> {
        return this.studentRepository.find();
      }
    
      findOne(id: number): Promise<Student | null> {
        return this.studentRepository.findOneBy({ id });
      }

      async remove(id: number): Promise<void> {
        await this.studentRepository.delete(id);
      }

      async update(id: number, newData: Partial<Student>): Promise<Student | null> {
        const student = await this.studentRepository.findOneBy({id});
        if (!student) {
          return null; 
        }
        Object.assign(student, newData);
        return await this.studentRepository.save(student);
      }
}

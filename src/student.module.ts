import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Students } from "./entities/student.entity";
import { StudentService } from "./student/student.service";
import { StudentController } from "./student/student.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Students])],
    providers: [StudentService],
    controllers: [StudentController],
    exports: [TypeOrmModule],
  })
  export class StudentsModule {}
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Students } from "../entities/student.entity";

import { StudentService } from "./student.service";
import { StudentController } from "./student.controller";
import { AuthService } from "../auth/auth.service";
import { JwtService } from "@nestjs/jwt";

@Module({
    imports: [TypeOrmModule.forFeature([Students])],
    providers: [StudentService,AuthService,JwtService],
    controllers: [StudentController],
    exports: [TypeOrmModule],
  })
  export class StudentsModule {}

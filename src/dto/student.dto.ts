import { IsString, IsInt } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsInt()
  contact: number;

  @IsString()
  course: string;
}

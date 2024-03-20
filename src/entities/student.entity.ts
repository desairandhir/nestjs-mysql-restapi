import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Students {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'bigint' })
  contact: number;

  @Column()
  course: string;

  
}

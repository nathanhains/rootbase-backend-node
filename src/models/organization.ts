import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Employee } from "./employee";
import { Garden } from "./garden";
import { Task } from "./task";

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @OneToMany((_type) => Task, (task: Task) => task.organization)
  tasks!: Array<Task>;

  @OneToMany((_type) => Garden, (garden: Garden) => garden.organization)
  gardens!: Array<Garden>;

  @OneToMany((_type) => Employee, (employee: Employee) => employee.organization)
  employees!: Array<Employee>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

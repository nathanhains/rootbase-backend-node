import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Organization } from "./organization";
import { Task } from "./task";
import { Comment } from "./comment";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  pin!: number;

  @Column({ nullable: true })
  organizationId!: number;
  @ManyToOne(
    (_type) => Organization,
    (organization: Organization) => organization.employees
  )
  @JoinColumn()
  organization!: Organization;

  @OneToMany((_type) => Task, (task: Task) => task.employee)
  tasks!: Array<Task>;

  @OneToMany((_type) => Comment, (comment: Comment) => comment.employee)
  comments!: Array<Comment>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

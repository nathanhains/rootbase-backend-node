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
import { Employee } from "./employee";
import { Garden } from "./garden";
import { Organization } from "./organization";
import { Comment } from './comment'

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  status!: string;

  @Column({ nullable: true })
  organizationId!: number;
  @ManyToOne(
    (_type) => Organization,
    (organization: Organization) => organization.tasks
  )
  @JoinColumn()
  organization!: Organization;

  @Column({ nullable: true })
  garden_id!: number;
  @ManyToOne((_type) => Garden, (garden: Garden) => garden.tasks)
  @JoinColumn()
  garden!: Garden;

  @Column({ nullable: true })
  employeeId!: number;
  @ManyToOne((_type) => Employee, (employee: Employee) => employee.tasks)
  @JoinColumn()
  employee!: Employee;

  @OneToMany((_type) => Comment, (comment: Comment) => comment.task)
  comments!: Array<Comment>;
    
  @Column()
  due_date!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

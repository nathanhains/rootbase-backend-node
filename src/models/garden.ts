import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Organization } from "./organization";
import { Task } from "./task";

@Entity()
export class Garden {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  organizationId!: number;
  @ManyToOne(
    (_type) => Organization,
    (organization: Organization) => organization.gardens
  )
  @JoinColumn()
  organization!: Organization;

  @OneToMany((_type) => Task, (task: Task) => task.garden)
  tasks!: Array<Task>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

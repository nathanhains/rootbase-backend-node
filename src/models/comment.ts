import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm"
import { Employee } from "./employee";
import { Task } from "./task";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "text",
      })
    content!: string;

    @Column({ nullable: true })
    employeeId!: number;
    @ManyToOne((_type) => Employee, (employee: Employee) => employee.comments)
    @JoinColumn()
    employee!: Employee

    @Column({ nullable: true })
    taskId!: number;
    @ManyToOne((_type) => Task, (task: Task) => task.comments)
    @JoinColumn()
    task!: Task;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
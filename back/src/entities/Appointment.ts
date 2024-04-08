import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  motive: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  userId: number;

  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.appointment)
  @JoinColumn()
  user: User;
}

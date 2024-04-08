import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AppDataSource } from "../config/data.source";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  birthdate: string;
  @Column()
  nDni: number;
  @Column()
  credentialId: number;
}

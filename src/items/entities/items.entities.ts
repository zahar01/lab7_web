import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  name: string;

  @Column()
  label: string;

  @Column({ unique:true })
  description: string

  @Column()
  price: number;

  @Column()
  category: string;

  @Column()
  gender: string;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


@Entity()
export class Item{
  @ApiProperty({example: "1", description:"id of item"})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: "Maika", description:"Name of item"})
  @Column({unique:true})
  name: string;

  @ApiProperty({example: "New", description:"item status, like 'new'"})
  @Column()
  label: string;

  @ApiProperty({example: "Good white T-shirt", description:"Description od an item"})
  @Column({ unique:true })
  description: string

  @ApiProperty({example: "1700", description:"item price"})
  @Column()
  price: number;

  @ApiProperty({example: "Hoodie", description:"Type of clothing"})
  @Column()
  category: string;

  @ApiProperty({example: "Man", description:"For whom this clothe is"})
  @Column()
  gender: string;
}
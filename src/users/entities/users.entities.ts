import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class UsersEntities{
  @ApiProperty({example: "1", description:"id of item"})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: "Ivan", description:"Name of user"})
  @Column()
  name: string;

  @ApiProperty({example: "abobus1337@gmail.com", description:"email of user"})
  @Column({unique:true})
  email: string;

  @ApiProperty({example: "Heheheheh1234", description:"Password of user"})
  @Column()
  password: string

  @ApiProperty({example: "admin", description:"User role"})
  @Column()
  role: string;
}
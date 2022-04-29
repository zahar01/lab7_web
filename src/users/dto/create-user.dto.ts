import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class createUserDto{
  @ApiProperty({example: "Ivan", description:"Name of user"})
  @IsString({message:"It must be a string"})
  readonly name: string;

  @ApiProperty({example: "abobus1337@gmail.com", description:"email of user"})
  @IsEmail({message:"It must be a email"})
  readonly email: string;

  @ApiProperty({example: "Heheheheh1234", description:"Password of user"})
  @IsString({message:"It must be a string"})
  readonly password: string

  @ApiProperty({example: "admin", description:"User role"})
  @IsString({message:"It must be a string"})
  readonly role: string;
}
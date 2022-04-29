import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class AddItemDto{
  @ApiProperty({example: "Maika", description:"Name of item"})
  @IsString({message:"It must be a string"})
  readonly name:string;

  @ApiProperty({example: "New", description:"item status, like 'new'"})
  @IsString({message:"It must be a string"})
  readonly label:string;

  @ApiProperty({example: "Good white T-shirt", description:"Description od an item"})
  @IsString({message:"It must be a string"})
  readonly description:string;

  @ApiProperty({example: "1700", description:"item price"})
  @IsNumber({}, {message:"It must be a num"})
  readonly price:number;

  @ApiProperty({example: "Hoodie", description:"Type of clothing"})
  @IsString({message:"It must be a string"})
  readonly category:string;

  @ApiProperty({example: "Man", description:"For whom this clothe is"})
  @IsString({message:"It must be a string"})
  readonly gender:string;
}
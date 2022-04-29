import { Body, Controller, Delete, Get, Param, Post, UsePipes } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { Item } from "./entities/items.entities";
import { AddItemDto } from "./dto/add-item.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ValidationPipe } from "../pipes/validation.pipe";

@ApiTags("Items")
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService:ItemsService) {}

  @ApiOperation({summary:"Getting all items"})
  @ApiResponse({status: 200, type:[Item]})
  @Get()
  async GetAll():Promise<Item[]> {
    return await this.itemsService.GetAllItems()
  }

  @ApiOperation({summary:"Getting item by id"})
  @ApiResponse({status: 200, type:Item})
  @Get("getItemById/:id")
  async GetItem(@Param("id") id:number):Promise<Item> {
    return await this.itemsService.GetItem(id)
  }

  @ApiOperation({summary:"Post item to db"})
  @ApiResponse({status: 200})
  @Post("addItem")
  async AddItem(@Body() dto:AddItemDto) {
    return await this.itemsService.AddItem(dto)
  }

  @ApiOperation({summary:"Delete item by id"})
  @ApiResponse({status: 200})
  @Delete("deleteItemById/:id")
  async DeleteItem(@Param("id") id:number) {
    return await this.itemsService.DeleteItem(id)
  }
}

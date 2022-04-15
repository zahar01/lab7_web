import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { Item } from "./entities/items.entity";
import { AddItemDto } from "./dto/add-item.dto";

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService:ItemsService) {}

  @Get()
  async GetAll():Promise<Item[]> {
    return await this.itemsService.GetAllItems()
  }

  @Get("getItemById/:id")
  async GetItem(@Param("id") id:number):Promise<Item> {
    return await this.itemsService.GetItem(id)
  }

  @Post("addItem")
  async AddItem(@Body() dto:AddItemDto) {
    return await this.itemsService.AddItem(dto)
  }

  @Delete("deleteItemById/:id")
  async DeleteItem(@Param("id") id:number) {
    return await this.itemsService.DeleteItem(id)
  }
}

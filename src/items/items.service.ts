import { Injectable } from '@nestjs/common';
import { AddItemDto } from "./dto/add-item.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "./entities/items.entities";
import { Repository } from "typeorm";

@Injectable()
export class ItemsService {
  constructor(@InjectRepository(Item) private itemRepository:Repository<Item>) {}

  async AddItem(dto:AddItemDto) {
    return await this.itemRepository.insert(dto)
  }

  async DeleteItem(id: number) {
    return await this.itemRepository.delete(id)
  }

  async GetAllItems():Promise<Item[]> {
    return await this.itemRepository.find()
  }

  async GetItem(id: number):Promise<Item> {
    return await this.itemRepository.findOne(id)
  }
}

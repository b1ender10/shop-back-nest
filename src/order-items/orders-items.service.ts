
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from './orders-items.entity';

@Injectable()
export class OrdersItemsService {
  constructor(
    @InjectRepository(OrderItem)
    private ordersItemsRepository: Repository<OrderItem>,
  ) {}

  findAll(): Promise<OrderItem[]> {
    return this.ordersItemsRepository.find();
  }

  async findOne(id: number): Promise<OrderItem> {
    const user = await this.ordersItemsRepository.findOne({ where: { order_item_id: id } });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async create(orderItem: OrderItem): Promise<OrderItem> {
    return this.ordersItemsRepository.save(orderItem);
  }

  async remove(id: number): Promise<void> {
    await this.ordersItemsRepository.delete(id);
  }

}
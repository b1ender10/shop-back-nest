
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  async findOne(id: number): Promise<Order> {
    const user = await this.ordersRepository.findOne({ where: { order_id: id } });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async create(order: Order): Promise<Order> {
    return this.ordersRepository.save(order);
  }

  async remove(id: number): Promise<void> {
    await this.ordersRepository.delete(id);
  }

}
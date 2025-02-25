import { Controller, Delete, Get, Param } from '@nestjs/common';
import { OrdersService } from "./orders.service";
import { Order } from "./orders.entity";
import { Body, Post } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { Comment } from 'src/comments/comments.entity';
import { OrderItem } from 'src/order-items/orders-items.entity';

export class CreateOrderDto {
  order_id: number;
  user_id: number;
  total_amount: number;
  status: string;
  created_at: Date;
  updated_at: Date;
  user: User;
  orderItems: OrderItem[];
}

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return this.ordersService.findOne(+id);
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.create(createOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.ordersService.remove(+id);
  }
}
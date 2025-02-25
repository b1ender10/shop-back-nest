import { Controller, Delete, Get, Param } from '@nestjs/common';
import { OrdersItemsService } from "./orders-items.service";
import { Body, Post } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { OrderItem } from 'src/order-items/orders-items.entity';
import { Order } from 'src/orders/orders.entity';
import { Product } from 'src/products/products.entity';

export class CreateOrderItemDto {
  order_item_id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price_per_unit: number;
  order: Order;
  product: Product;
}

@Controller('orders-items')
export class OrdersItemsController {
  constructor(private readonly ordersItemsService: OrdersItemsService) {}

  @Get()
  findAll(): Promise<OrderItem[]> {
    return this.ordersItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<OrderItem> {
    return this.ordersItemsService.findOne(+id);
  }

  @Post()
  create(@Body() createOrderItemDto: CreateOrderItemDto): Promise<OrderItem> {
    return this.ordersItemsService.create(createOrderItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.ordersItemsService.remove(+id);
  }
}
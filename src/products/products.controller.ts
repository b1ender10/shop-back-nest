import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ProductsService } from "./products.service";
import { Product } from "./products.entity";
import { Body, Post } from '@nestjs/common';

export class CreateProductDto {
  product_id: number;
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  created_at: Date;
  updated_at: Date;
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(+id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(+id);
  }
}
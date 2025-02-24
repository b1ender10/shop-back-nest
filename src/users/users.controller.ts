import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from "./users.service";
import { User } from "./users.entity";
import { Body, Post } from '@nestjs/common';

export class CreateUserDto {
  user_id: number;
  username: string;
  password_hash: string;
  first_name: string;
  email: string;
  last_name: string;
  orders: any[];
  posts: any[];
  comments: any[];
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(+id);
  }

  
}
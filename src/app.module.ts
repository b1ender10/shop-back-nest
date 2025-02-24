import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from './entities/products.entity';
import { Post } from './entities/posts.entity';
import { Comment } from './entities/comment.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/user.controller';
import { UsersService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '2281337322',
      database: 'new_schema',
      entities: [User, Order, OrderItem, Product, Post, Comment],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User, Order, OrderItem, Product, Post, Comment]),
  ],
  // ...rest of your module configuration
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
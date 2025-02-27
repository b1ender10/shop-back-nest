import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { Order } from './orders/orders.entity';
import { OrderItem } from './order-items/orders-items.entity';
import { Product } from './products/products.entity';
import { Post } from './posts/posts.entity';
import { Comment } from './comments/comments.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersItemsController } from './order-items/orders-items.controller';
import { OrdersItemsService } from './order-items/orders-items.service';

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
  controllers: [UsersController, PostsController, CommentsController, ProductsController, OrdersController, OrdersItemsController],
  providers: [UsersService, PostsService, CommentsService, ProductsService, OrdersService, OrdersItemsService],
})
export class AppModule {}
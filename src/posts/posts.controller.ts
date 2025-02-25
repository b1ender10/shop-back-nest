import { Controller, Delete, Get, Param } from '@nestjs/common';
import { PostsService } from "./posts.service";
import { Post as TPost } from "./posts.entity";
import { Body, Post } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { Comment } from 'src/comments/comments.entity';

export class CreatePostDto {
    post_id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date;
    user_id: number;
    user: User;
    comments: Comment[];
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<TPost[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TPost> {
    return this.postsService.findOne(+id);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto): Promise<TPost> {
    return this.postsService.create(createPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.postsService.remove(+id);
  }

  @Get(':id/comments')
  findAllComments(@Param('id') id: string): Promise<Comment[]> {
    return this.postsService.findAllComments(+id);
  }

  
}
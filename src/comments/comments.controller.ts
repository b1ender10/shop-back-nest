import { Controller, Delete, Get, Param } from '@nestjs/common';
import { CommentsService } from "./comments.service";
import { Comment } from "./comments.entity";
import { Body, Post } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { Post as TPost } from 'src/posts/posts.entity';

export class CreateCommentDto {
    comment_id: number;
    post_id: number;
    user_id: number;
    content: string;
    created_at: Date;
    updated_at: Date;
    user: User;
    post: TPost;
}

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get()
  findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Comment> {
    return this.commentsService.findOne(+id);
  }

  @Post()
  create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
    return this.commentsService.create(createCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.commentsService.remove(+id);
  }

  
}
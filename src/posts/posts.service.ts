
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './posts.entity';
import { Comment } from '../comments/comments.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    const user = await this.postsRepository.findOne({ where: { post_id: id } });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async create(post: Post): Promise<Post> {
    return this.postsRepository.save(post);
  }

  async remove(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }

  async findAllComments(id: number): Promise<Comment[]> {
    return this.commentsRepository.find({where: {post_id: id}});
  }

  async createComment(id: number, comment: Comment): Promise<Comment> {
    return this.commentsRepository.save({...comment, post_id: id});
  }
}
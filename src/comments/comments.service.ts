
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comments.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find();
  }

  async findOne(id: number): Promise<Comment> {
    const user = await this.commentsRepository.findOne({ where: { comment_id: id } });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async create(comment: Comment): Promise<Comment> {
    return this.commentsRepository.save(comment);
  }

  async remove(id: number): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}
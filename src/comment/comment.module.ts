import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserComment } from 'src/entities/user/user.comments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserComment])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}

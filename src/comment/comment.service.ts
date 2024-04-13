import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserComment } from 'src/entities/user/user.comments.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CommentService {

  constructor(
    @InjectRepository(UserComment) private cmtRepo : Repository<UserComment>
  ){}
  async create(createUserCommentDto: CreateCommentDto): Promise<UserComment>{
    const newUserComment = this.cmtRepo.create(createUserCommentDto)
    return this.cmtRepo.save(newUserComment)
  }

  async findAll(page: number = 1, limit: number = 10): Promise<UserComment[]> {
    const offset  = (page - 1) * limit;
    return this.cmtRepo.find({
      skip: offset ,
      take: limit,
    });
  }

  async findOne(id: number): Promise<UserComment> | null{
    return this.cmtRepo.findOne({where:{id}})
  }

  async update(id: number, updateUserCommentDto: UpdateCommentDto) {
    return this.cmtRepo.save({
      id: id,
      postId: updateUserCommentDto.postId,
      userId: updateUserCommentDto.userId,
      content: updateUserCommentDto.content,
  }); 
  }

  async remove(id: number): Promise<UserComment> {
    const UserCommentRemove =  await this.findOne(id)
    return this.cmtRepo.remove(UserCommentRemove)
}
}

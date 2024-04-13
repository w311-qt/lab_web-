  import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {

  constructor(
    @InjectRepository(Article) private articleRepo: Repository<Article>
  ){}
  async create(createArticleDto: CreateArticleDto): Promise<Article>{
    const newArticle = this.articleRepo.create(createArticleDto)
    return this.articleRepo.save(newArticle)
  }

  async findAll(page: number = 1, limit: number = 10): Promise<Article[]> {
    const offset  = (page - 1) * limit;
    return this.articleRepo.find({
      skip: offset ,
      take: limit,
    });
  }

  async findOne(id: number): Promise<Article> | null{
    return this.articleRepo.findOne({where:{id}})
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articleRepo.save({
      id: id,
      title: updateArticleDto.title,
      content: updateArticleDto.content,
  });
  }

  remove(id: number): Promise<Article> {
    const articleRemove = this.findOne(id)
    return this.articleRepo.remove(articleRemove)
  }
}

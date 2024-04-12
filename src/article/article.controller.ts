import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('article')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @ApiOperation({
    summary: 'Create article'
  })
  @ApiResponse({status: 201,description: 'The article has been successfully created.'})
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @ApiOperation({
    summary: 'Get all articles'})
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @ApiResponse({ status: 404,description: 'Not Found' })
  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @ApiOperation({ summary: 'Get article by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @ApiResponse({ status: 404,description: 'Not Found' })  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @ApiOperation({ summary: 'Change article by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @ApiOperation({ summary: 'Delete article by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}

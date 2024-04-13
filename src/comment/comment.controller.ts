import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({
    summary: 'Create comment'
  })
  @ApiResponse({status: 201,description: 'The comment has been successfully created.'})
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @ApiOperation({
    summary: 'Get all comments'})
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @ApiResponse({ status: 404,description: 'Not Found' })
  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.commentService.findAll(page, limit);
  }

  @ApiOperation({ summary: 'Get comment by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @ApiResponse({ status: 404,description: 'Not Found' })  
  @Get('/:{id}')  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @ApiOperation({ summary: 'Change comment by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Patch('/:{id}')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @ApiOperation({ summary: 'Delete comment by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Delete('/:{id}')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}

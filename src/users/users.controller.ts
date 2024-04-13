import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Create user'
  })
  @ApiResponse({status: 201,description: 'The user has been successfully created.'})
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({
    summary: 'Get all users'})
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @ApiResponse({ status: 404,description: 'Not Found' })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @ApiResponse({ status: 404,description: 'Not Found' })  
  @Get('/:{id}')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({ summary: 'Change user by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Patch('/:{id}')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Delete('/:{id}')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

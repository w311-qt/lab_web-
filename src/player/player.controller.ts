import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('player')
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @ApiOperation({
    summary: 'Create player'
  })
  @ApiResponse({status: 201,description: 'The player has been successfully created.'})
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @ApiOperation({
    summary: 'Get all players'})
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @ApiResponse({ status: 404,description: 'Not Found' })
  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.playerService.findAll(page, limit);
  }

  @ApiOperation({ summary: 'Get player by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @ApiResponse({ status: 404,description: 'Not Found' }) 
  @Get('/:{id}')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @ApiOperation({ summary: 'Change player by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Patch('/:{id}')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(+id, updatePlayerDto);
  }

  @ApiOperation({ summary: 'Delete player by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Delete('/:{id}')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}

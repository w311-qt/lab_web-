import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('team')
@Controller('team')
export class TeamController { 
  constructor(private readonly teamService: TeamService) {}

  @ApiOperation({
    summary: 'Create team'
  })
  @ApiResponse({status: 201,description: 'The team has been successfully created.'})
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @ApiOperation({
    summary: 'Get all teams'})
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @ApiResponse({ status: 404,description: 'Not Found' })
  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @ApiOperation({ summary: 'Get team by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @ApiResponse({ status: 404,description: 'Not Found' })  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  
  @ApiOperation({ summary: 'Change team by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @ApiOperation({ summary: 'Delete team by id' })
  @ApiResponse({status: 400,description: 'Bad request!'})
  @ApiResponse({status: 500,description: 'Internal Server Error'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}

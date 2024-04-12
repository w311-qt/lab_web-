import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from 'src/entities/sport_entities/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {
  constructor(@InjectRepository(Team) private teamRepo: Repository<Team>){
  }
  async create(createTeamDto: CreateTeamDto):Promise<Team> {
    const newTeam = this.teamRepo.create(createTeamDto)
    return this.teamRepo.save(newTeam)
  }

  async findAll(): Promise<Team[]> {
    return this.teamRepo.find()
  }

  async findOne(id: number): Promise<Team> | null {
    return this.teamRepo.findOne({where: {id}})
  }

  async update(id: number, updateTeamDto: UpdateTeamDto): Promise<Team>{
     this.teamRepo.update(id, updateTeamDto)
    return this.findOne(id);
  }

  async remove(id: number): Promise<Team>{
    const teamRemo = await this.findOne(id)
    return this.teamRepo.remove(teamRemo)
  }
}

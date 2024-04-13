import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from 'src/entities/sport_entities/player.entity';
import { Repository, DeepPartial } from 'typeorm';

@Injectable()
export class PlayerService {

  constructor(
      @InjectRepository(Player) private playerRepo: Repository<Player>
  ){}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const newPlayer: DeepPartial<Player> = {
      name: createPlayerDto.name,
      position: createPlayerDto.position,
      age: createPlayerDto.age,
    };

    return await this.playerRepo.save(newPlayer);
  }

  async findAll(page: number = 1, limit: number = 10): Promise<Player[]> {
    const offset  = (page - 1) * limit;
    return this.playerRepo.find({
      skip: offset ,
      take: limit,
    });
  }

  async findOne(id: number): Promise<Player | null> {
    return await this.playerRepo.findOne({where: {id}});
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player | null> {
    return this.playerRepo.save({
      id: id,
      name: updatePlayerDto.name,
      position: updatePlayerDto.position,
      age: updatePlayerDto.age,
      team: updatePlayerDto.team,
  }); 
  }
  
  
  

  async remove(id: number): Promise<Player> {
    const playerToRemove = await this.playerRepo.findOne({where: {id}});
    if (!playerToRemove) {
      return null;
    }
    return await this.playerRepo.remove(playerToRemove);
  }
}

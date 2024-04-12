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

  async create(createPlayerDto: CreatePlayerDto): Promise<Player>{
    const newPlayer = this.playerRepo.create(createPlayerDto as DeepPartial<Player>);
    return await this.playerRepo.save(newPlayer);
  }

  async findAll(): Promise<Player[]> {
    return await this.playerRepo.find();
  }

  async findOne(id: number): Promise<Player | null> {
    return await this.playerRepo.findOne({where: {id}});
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    const newPlayer = this.playerRepo.create(updatePlayerDto as DeepPartial<Player>);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<Player> {
    const playerToRemove = await this.playerRepo.findOne({where: {id}});
    if (!playerToRemove) {
      return null;
    }
    return await this.playerRepo.remove(playerToRemove);
  }
}

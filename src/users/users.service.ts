import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  
  constructor(@InjectRepository(User) private userRepo: Repository<User>
  ){}

  async create(createUserDto: CreateUserDto): Promise<User>{
    const newuser = this.userRepo.create(createUserDto)
    return this.userRepo.save(newuser)
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find()
  }

  async findOne(id: number): Promise<User> | null {
    return this.userRepo.findOneOrFail({where: {id}})
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepo.save({
      id: id,
      name: updateUserDto.name,
      email: updateUserDto.email,
  });
  }

  

  async remove(id: number): Promise<User> {
    const userToRemove = await this.findOne(id); 
    return this.userRepo.remove(userToRemove)
  }
}

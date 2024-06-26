import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    name?: string;

    @IsEmail()
    email?: string;
}

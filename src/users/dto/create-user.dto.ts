import { IsNotEmpty, IsString, IsEmail, MinLength, IsDefined } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ description: 'The name of the user' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'The email of the user' })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'The password of the user (min length: 6)' })
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @IsDefined()
    password: string;
}

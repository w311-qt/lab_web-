import { IsNotEmpty, IsString, IsInt, Min, Max, IsInstance } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { Team } from 'src/entities/sport_entities/team.entity';

export class CreatePlayerDto {
    @ApiProperty({ description: 'The id of the player between 1 and 999' })
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(9999)
    id: number;

    @ApiProperty({ description: 'The name of the player' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: 'The position of the player' })
    @IsNotEmpty()
    @IsString()
    position: string;

    @ApiProperty({ description: 'The nationality of the player' })
    @IsNotEmpty()
    @IsString()
    nationality: string;

    @ApiProperty({ description: 'The team that the player belongs to' })
    @IsNotEmpty()
    team: Team;

    @ApiProperty({ description: 'The rating of the player, must be between 16 and 60' })
    @IsNotEmpty()
    @IsInt()
    @Min(16)
    @Max(60)
    age: number;
}

import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateTeamDto {
    @ApiProperty({ description: 'The name of the team' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'The description of the team' })
    description: string;

    @ApiProperty({ type: [String], description: 'Array of members in the team' })
    @MinLength(3, { message: 'Members array should have at least 3 members' })
    members: string[];
}

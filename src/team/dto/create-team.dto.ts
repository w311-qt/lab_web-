import { IsString, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateTeamDto {
    @ApiProperty({ description: 'The name of the team' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'The description of the team' })
    @IsOptional()
    description?: string;

    @ApiProperty({ description: 'The URL of the team logo' })
    @IsOptional()
    logoUrl?: string;
}

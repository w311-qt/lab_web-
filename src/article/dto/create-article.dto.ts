import { IsNotEmpty, IsString, IsArray, IsDate } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto {
    @ApiProperty({ description: 'The title of the article' })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ description: 'The content of the article' })
    content: object;

    @ApiProperty({ type: [String], description: 'Array of tags for the article' })
    @IsArray()
    tags: string[];

    @ApiProperty({ description: 'The creation date of the article' })
    @IsDate()
    createdAt: Date;
}

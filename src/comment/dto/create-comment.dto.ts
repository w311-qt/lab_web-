import { IsNotEmpty, IsString, IsDate } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {
    @ApiProperty({ description: 'The content of the comment' })
    @IsNotEmpty()
    @IsString()
    content: string;

    @ApiProperty({ description: 'The ID of the post the comment belongs to' })
    @IsNotEmpty()
    @IsString()
    postId: string;

    @ApiProperty({ description: 'The ID of the user who created the comment' })
    @IsNotEmpty()
    @IsString()
    userId: string;

    @ApiProperty({ description: 'The creation date of the comment' })
    @IsNotEmpty()
    @IsDate()
    createdAt: Date;
}

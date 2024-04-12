import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';
import {IsDate} from "class-validator";

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    @ApiProperty({ description: 'The creation date of the article' })
    @IsDate()
    createdAt:Date;
}

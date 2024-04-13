import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { User } from './user.entity';
import { Article } from '../article/article.entity'

@Entity()
export class UserComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @ManyToOne(() => User, user => user.comments)
    user: User;

    @ManyToOne(() => Article, article => article.comments)
    @JoinColumn({ name: 'articleId' })
    article: Article;
}

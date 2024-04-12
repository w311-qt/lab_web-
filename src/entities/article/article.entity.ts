import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserComment } from '../user/user.comments.entity';

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @OneToMany(() => UserComment, userComment => userComment.article)
    comments: UserComment[];
}
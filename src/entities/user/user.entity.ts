import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserComment } from './user.comments.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => UserComment, comment => comment.user)
    comments: UserComment[];
}

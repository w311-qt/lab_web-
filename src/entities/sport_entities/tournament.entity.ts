import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from './team.entity';

@Entity()
export class Tournament {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Team, team => team.tournament)
    teams: Team[];
}
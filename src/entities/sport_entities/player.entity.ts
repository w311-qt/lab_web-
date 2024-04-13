import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from 'typeorm';
import { Team } from './team.entity';
import { Country } from './county.entity';
import {Stats} from "./stats.entity";


@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    position: string;

    @Column()
    age: number;

    @ManyToOne(type => Team, team => team.players)
    team: Team;

    @ManyToOne(() => Country, country => country.players)
    nationality: Country;

    @OneToMany(() => Stats, stats => stats.player)
    stats: Stats[];

    constructor(name: string, position: string, age: number, nationality: string, team: Team) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.team = team;
    }
}
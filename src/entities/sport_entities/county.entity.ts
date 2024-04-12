import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from './team.entity';
import { Player } from './player.entity';

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    code: string;

    @OneToMany(() => Team, team => team.country)
    teams: Team[];

    @OneToMany(() => Player, player => player.nationality)
    players: Player[];

    constructor(name: string, code: string) {
        this.name = name;
        this.code = code;
    }
}
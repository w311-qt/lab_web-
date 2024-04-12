import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { Player } from './player.entity';
import { Country } from './county.entity';
import {Tournament} from "./tournament.entity";
import {Stats} from "./stats.entity";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    logoUrl: string;

    @ManyToOne(() => Country, country => country.teams)
    country: Country;

    @OneToMany(() => Player, player => player.team)
    players: Player[];

    @ManyToOne(() => Tournament, tournament => tournament.teams)
    @JoinColumn({ name: 'tournamentId' })
    tournament: Tournament;

    @OneToMany(() => Stats, stats => stats.team)
    stats: Stats[];

    constructor(name: string, logoUrl: string, country: Country) {
        this.name = name;
        this.logoUrl = logoUrl;
        this.country = country;
    }
}
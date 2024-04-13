import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Team } from './team.entity';
import { Player } from './player.entity';

@Entity()
export class Stats {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    points: number;

    @Column()
    rebounds: number;

    @Column()
    assists: number;

    @ManyToOne(() => Team, team => team.stats)
    @JoinColumn({ name: 'teamId' })
    team: Team;

    @ManyToOne(() => Player, player => player.stats)
    @JoinColumn({ name: 'playerId' })
    player: Player;
}
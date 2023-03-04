import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Competencias extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_competencia: number;

    @Column({})
    nombre: string;
    @Column({})
    id_asignatura: number;
}
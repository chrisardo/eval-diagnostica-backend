import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Asignatura extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_asignatura: number;

    @Column({})
    nombre: string;
}
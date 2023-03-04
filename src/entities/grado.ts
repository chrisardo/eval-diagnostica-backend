import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Grado extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_grado: number;

    @Column({})
    nombre_grado: string;
}
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Nivel_logro extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_nivel: number;

    @Column({})
    nombre: string;
    
    @Column({})
    letra_nombre: string;
}
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Rol extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_rol: number;

    @Column()
    codigorol: number;


    @Column({})
    nombre_rol: string;
}
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Upload extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_upload: number;

    @Column({})
    fname: string;
    
    @Column({})
    nombre: string;

    @Column({})
    cod_mod_ie: number;
    
    @CreateDateColumn()
    fecha: Date;
}
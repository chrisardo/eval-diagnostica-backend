import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Institucion_educativa extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_ie: number;

    @Column()
    cod_mod_ie: number;


    @Column({})
    nombre_ie: string;
    
    @Column({})
    nivel_ie: string;
    
    @Column({})
    departamento_ie: string;
    
    @Column({})
    provincia_ie: string;

    @Column({})
    distrito_ie: string;

    @Column({})
    estado_ie: number;
    
    @CreateDateColumn()
    fecharegistro: Date;
    
    @Column({})
    estado_subido_excel: number;
}

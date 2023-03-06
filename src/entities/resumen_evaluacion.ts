import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Resumen_evaluacion extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_resumen: number;

    @Column({})
    id_competencia: number;

    @Column({})
    id_nivel: number;

    @Column({})
    porcentaje: number;

    @Column({type: 'float'})
    promedio: number;

    @Column({})
    id_grado: number;
    
    @Column({})
    id_asignatura: number;
    
    @Column({})
    cod_mod_ie: number;

    @CreateDateColumn()
    fecha: Date;
}
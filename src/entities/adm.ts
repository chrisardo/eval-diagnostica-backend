import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class Administrador extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_admin: number;

    @Column({})
    nombres: string;
    
    @Column({})
    apellidos: string;

    @Column({})
    contrasena: string;
    
    @Column({})
    username: string;

    @Column({})//unique: true
    correo: string;
    
    @Column({})
    celular: number;

    @Column()
    cod_mod_ie: number;
    
    @Column({})
    codigorol: number;
    
    @CreateDateColumn()
    fecharegistro: Date;
    
    @Column({})
    estado: number;
}

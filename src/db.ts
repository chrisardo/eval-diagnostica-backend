import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Rol } from "./entities/rol";
import { Asignatura } from "./entities/asignaturas";
import { Competencias } from "./entities/competencias";
import { Grado } from "./entities/grado";
import { Institucion_educativa } from "./entities/institucion_educativa";


export const AppDataSource = new DataSource({//Conexion a la BD
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "evalu_diagnostica",
  synchronize: true,
  logging: true,//Para ir viendo los mensajes
  entities: [User, Rol, Asignatura, Competencias, Grado, Institucion_educativa],//Genera la tabla USER typeorm de la BD
});

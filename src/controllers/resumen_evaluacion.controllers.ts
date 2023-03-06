import { Request, Response } from "express"
import { Resumen_evaluacion } from "../entities/resumen_evaluacion";

interface Resumen_evalauacionBody {
    id_competencia: number;    
    id_nivel: number;
    porcentaje: number;
    promedio: number;
    id_grado: number;
    id_asingatura: number;
    cod_mod_ie: number;
    fecha: Date;
}

export const getResumen_evaluaciones = async (req: Request, res: Response) => {
    try {
        const resu_evas = await Resumen_evaluacion.find();
        return res.json(resu_evas);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getResumen_evaluacion = async (req: Request, res: Response) => {
    try {
        const { id_resumen } = req.params;
        const resu_eva = await Resumen_evaluacion.findOneBy({ id_resumen: parseInt(id_resumen) });//Buscar usuario por medio de su ID

        if (!resu_eva) return res.status(404).json({ message: "Usuario no existe" });

        return res.json(resu_eva);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createResumen_evaluacion = async (
    req: Request<unknown, unknown, Resumen_evalauacionBody>,
    res: Response
) => {
    try {

        const { id_competencia, id_nivel, porcentaje, promedio, id_grado, id_asingatura, cod_mod_ie, fecha} = req.body;
        const resu_eva= new Resumen_evaluacion();
        resu_eva.id_competencia = id_competencia;
        resu_eva.id_nivel = id_nivel;
        resu_eva.porcentaje = porcentaje;
        resu_eva.promedio = promedio;
        resu_eva.id_grado = id_grado;
        resu_eva.id_asignatura = id_asingatura;
        resu_eva.cod_mod_ie = cod_mod_ie;
        resu_eva.fecha = fecha;


        await resu_eva.save();
        return res.json(resu_eva);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateResumen_evaluacion = async (req: Request, res: Response) => {//Funcion para actulizar los datos de la tabla User
    const { id_resumen } = req.params;

    try {
        const resu_eva = await Resumen_evaluacion.findOneBy({ id_resumen: parseInt(id_resumen) });
        if (!resu_eva) return res.status(404).json({ message: "Usuario no existe" });

        await Resumen_evaluacion.update({ id_resumen: parseInt(id_resumen) }, req.body);//

        return res.sendStatus(204);
        //return res.json('received')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteResumen_evaluacion = async (req: Request, res: Response) => {
    const { id_resumen} = req.params;
    try {
        const result = await Resumen_evaluacion.delete({ id_resumen: parseInt(id_resumen) });

        if (result.affected === 0)//Si la longitud del usuario afectado es 0
            return res.status(404).json({ message: "Uusario no existe" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

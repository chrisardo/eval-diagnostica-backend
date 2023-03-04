import { Request, Response } from "express"
import { Institucion_educativa} from "../entities/institucion_educativa";

interface IEBody {
    cod_mod_ie: number;
    nombre_ie: string;
    nivel_ie: string;
    departamento_ie: string;
    provincia_ie: string;
    distrito_ie: string;
    estado_ie: number;
    fecharegistro: Date;
    estado_subido_excel: number;
}

export const getIES = async (req: Request, res: Response) => {
    try {
        const ies = await Institucion_educativa.find();
        return res.json(ies);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getIE = async (req: Request, res: Response) => {
    try {
        const { id_ie} = req.params;
        const ie = await Institucion_educativa.findOneBy({ id_ie: parseInt(id_ie) });//Buscar usuario por medio de su ID

        if (!ie) return res.status(404).json({ message: "Usuario no existe" });

        return res.json(ie);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createIE = async (
    req: Request<unknown, unknown, IEBody>,
    res: Response
) => {
    try {

        const { cod_mod_ie, nombre_ie, nivel_ie, departamento_ie, provincia_ie, distrito_ie, estado_ie, fecharegistro, estado_subido_excel} = req.body;
        const ie = new Institucion_educativa();
        ie.cod_mod_ie = cod_mod_ie;
        ie.nombre_ie = nombre_ie;
        ie.nivel_ie = nivel_ie;
        ie.departamento_ie = departamento_ie;
        ie.provincia_ie = provincia_ie;
        ie.distrito_ie = distrito_ie;
        ie.estado_ie = estado_ie;
        ie.fecharegistro = fecharegistro;
        ie.estado_subido_excel = estado_subido_excel;

        await ie.save();
        return res.json(ie);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateIE = async (req: Request, res: Response) => {//Funcion para actulizar los datos de la tabla User
    const { id_ie } = req.params;

    try {
        const ie = await Institucion_educativa.findOneBy({ id_ie: parseInt(id_ie) });
        if (!ie) return res.status(404).json({ message: "Usuario no existe" });

        await Institucion_educativa.update({ id_ie: parseInt(id_ie) }, req.body);//

        return res.sendStatus(204);
        //return res.json('received')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteIE = async (req: Request, res: Response) => {
    const { id_ie} = req.params;
    try {
        const result = await Institucion_educativa.delete({ id_ie: parseInt(id_ie) });

        if (result.affected === 0)//Si la longitud del usuario afectado es 0
            return res.status(404).json({ message: "Uusario no existe" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

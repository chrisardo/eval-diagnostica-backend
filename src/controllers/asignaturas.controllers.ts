import { Request, Response } from "express"
import { Asignatura } from "../entities/asignaturas";

interface AsignaturasBody {
    nombre: string;
}

export const getAsignaturas = async (req: Request, res: Response) => {
    try {
        const asignaturas = await Asignatura.find();
        return res.json(asignaturas);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getAsignatura = async (req: Request, res: Response) => {
    try {
        const { id_asignatura } = req.params;
        const asignatura = await Asignatura.findOneBy({ id_asignatura: parseInt(id_asignatura) });//Buscar usuario por medio de su ID

        if (!asignatura) return res.status(404).json({ message: "Usuario no existe" });

        return res.json(asignatura);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createAsignatura = async (
    req: Request<unknown, unknown, AsignaturasBody>,
    res: Response
) => {
    try {

        const { nombre} = req.body;
        const asignatura = new Asignatura();
        asignatura.nombre = nombre;

        await asignatura.save();
        return res.json(asignatura);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateAsignatura = async (req: Request, res: Response) => {//Funcion para actulizar los datos de la tabla User
    const { id_asignatura } = req.params;

    try {
        const asignatura = await Asignatura.findOneBy({ id_asignatura: parseInt(id_asignatura) });
        if (!asignatura) return res.status(404).json({ message: "Usuario no existe" });

        await Asignatura.update({ id_asignatura: parseInt(id_asignatura) }, req.body);//

        return res.sendStatus(204);
        //return res.json('received')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteAsignatura = async (req: Request, res: Response) => {
    const { id_asignatura } = req.params;
    try {
        const result = await Asignatura.delete({ id_asignatura: parseInt(id_asignatura) });

        if (result.affected === 0)//Si la longitud del usuario afectado es 0
            return res.status(404).json({ message: "Uusario no existe" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

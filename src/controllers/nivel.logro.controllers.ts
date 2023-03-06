import { Request, Response } from "express"
import { Nivel_logro } from "../entities/nivel.logro";

interface Nivel_logroBody {
    nombre: string;
    letra_nombre: string;
}

export const getNivel_logros = async (req: Request, res: Response) => {
    try {
        const niveles = await Nivel_logro.find();
        return res.json(niveles);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getNivel_logro = async (req: Request, res: Response) => {
    try {
        const { id_nivel } = req.params;
        const nivel = await Nivel_logro.findOneBy({ id_nivel: parseInt(id_nivel) });//Buscar usuario por medio de su ID

        if (!nivel) return res.status(404).json({ message: "Usuario no existe" });

        return res.json(nivel);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createNivel_logro = async (
    req: Request<unknown, unknown, Nivel_logroBody>,
    res: Response
) => {
    try {

        const { nombre, letra_nombre} = req.body;
        const nivel = new Nivel_logro();
        nivel.nombre = nombre;
        nivel.letra_nombre = letra_nombre;


        await nivel.save();
        return res.json(nivel);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateNivel = async (req: Request, res: Response) => {//Funcion para actulizar los datos de la tabla User
    const { id_nivel } = req.params;

    try {
        const nivel = await Nivel_logro.findOneBy({ id_nivel: parseInt(id_nivel) });
        if (!nivel) return res.status(404).json({ message: "Usuario no existe" });

        await Nivel_logro.update({ id_nivel: parseInt(id_nivel) }, req.body);//

        return res.sendStatus(204);
        //return res.json('received')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteNivel_logro = async (req: Request, res: Response) => {
    const { id_nivel } = req.params;
    try {
        const result = await Nivel_logro.delete({ id_nivel: parseInt(id_nivel) });

        if (result.affected === 0)//Si la longitud del usuario afectado es 0
            return res.status(404).json({ message: "Uusario no existe" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

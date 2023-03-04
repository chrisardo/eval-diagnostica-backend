import { Request, Response } from "express"
import { Grado} from "../entities/grado";

interface GradoBody {
    nombre_grado: string;
}

export const getGrados = async (req: Request, res: Response) => {
    try {
        const grados = await Grado.find();
        return res.json(grados);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getGrado = async (req: Request, res: Response) => {
    try {
        const { id_grado} = req.params;
        const grado = await Grado.findOneBy({ id_grado: parseInt(id_grado) });//Buscar usuario por medio de su ID

        if (!grado) return res.status(404).json({ message: "Usuario no existe" });

        return res.json(grado);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createGrado = async (
    req: Request<unknown, unknown, GradoBody>,
    res: Response
) => {
    try {

        const { nombre_grado} = req.body;
        const grado = new Grado();
        grado.nombre_grado = nombre_grado;

        await grado.save();
        return res.json(grado);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateGrado = async (req: Request, res: Response) => {//Funcion para actulizar los datos de la tabla User
    const { id_grado } = req.params;

    try {
        const grado = await Grado.findOneBy({ id_grado: parseInt(id_grado) });
        if (!grado) return res.status(404).json({ message: "Usuario no existe" });

        await Grado.update({ id_grado: parseInt(id_grado) }, req.body);//

        return res.sendStatus(204);
        //return res.json('received')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteGrado = async (req: Request, res: Response) => {
    const { id_grado} = req.params;
    try {
        const result = await Grado.delete({ id_grado: parseInt(id_grado) });

        if (result.affected === 0)//Si la longitud del usuario afectado es 0
            return res.status(404).json({ message: "Uusario no existe" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

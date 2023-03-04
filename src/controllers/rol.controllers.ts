import { Request, Response } from "express"
import { Rol } from "../entities/rol";

interface RolBody {
    codigorol: number;
    nombre_rol: string;
}

export const getRols = async (req: Request, res: Response) => {
    try {
        const roles = await Rol.find();
        return res.json(roles);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getRol = async (req: Request, res: Response) => {
    try {
        const { id_rol } = req.params;
        const rol = await Rol.findOneBy({ id_rol: parseInt(id_rol) });//Buscar usuario por medio de su ID

        if (!rol) return res.status(404).json({ message: "Usuario no existe" });

        return res.json(rol);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createRol = async (
    req: Request<unknown, unknown, RolBody>,
    res: Response
) => {
    try {

        const { codigorol, nombre_rol } = req.body;
        const rol = new Rol();
        rol.codigorol = codigorol;
        rol.nombre_rol = nombre_rol;

        await rol.save();
        return res.json(rol);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateRol = async (req: Request, res: Response) => {//Funcion para actulizar los datos de la tabla User
    const { id_rol } = req.params;

    try {
        const rol = await Rol.findOneBy({ id_rol: parseInt(id_rol) });
        if (!rol) return res.status(404).json({ message: "Usuario no existe" });

        await Rol.update({ id_rol: parseInt(id_rol) }, req.body);//

        return res.sendStatus(204);
        //return res.json('received')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteRol = async (req: Request, res: Response) => {
    const { id_rol } = req.params;
    try {
        const result = await Rol.delete({ id_rol: parseInt(id_rol) });

        if (result.affected === 0)//Si la longitud del usuario afectado es 0
            return res.status(404).json({ message: "Uusario no existe" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

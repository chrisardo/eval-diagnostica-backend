import { Request, Response } from "express"
import { Administrador } from "../entities/adm";

interface AdministradorBody {
    nombres: string;
    apellidos: string;
    contrasena: string;
    username: string;
    correo: string;
    celular: number;
    cod_mod_ie: number;
    codigorol: number;
    fecharegistro: Date;
    estado: number;
}

export const getAdms = async (req: Request, res: Response) => {
    try {
        const adms = await Administrador.find();
        return res.json(adms);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getAdm = async (req: Request, res: Response) => {
    try {
        const { id_admin } = req.params;
        const adm = await Administrador.findOneBy({ id_admin: parseInt(id_admin) });//Buscar usuario por medio de su ID

        if (!adm) return res.status(404).json({ message: "Usuario no existe" });

        return res.json(adm);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createAdm = async (
    req: Request<unknown, unknown, AdministradorBody>,
    res: Response
) => {
    try {

        const { nombres, apellidos, contrasena, username, correo, celular, cod_mod_ie, codigorol,fecharegistro, estado } = req.body;
        const adm = new Administrador();
        
        adm.nombres = nombres;
        adm.apellidos = apellidos;
        adm.contrasena = contrasena;
        adm.username= username;
        adm.correo = correo;
        adm.celular = celular;
        adm.cod_mod_ie = cod_mod_ie;
        adm.codigorol = codigorol;
        adm.fecharegistro = fecharegistro;
        adm.estado = estado;

        await adm.save();
        return res.json(adm);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateAdm = async (req: Request, res: Response) => {//Funcion para actulizar los datos de la tabla User
    const { id_admin } = req.params;

    try {
        const adm = await Administrador.findOneBy({ id_admin: parseInt(id_admin) });
        if (!adm) return res.status(404).json({ message: "Usuario no existe" });

        await Administrador.update({ id_admin: parseInt(id_admin) }, req.body);//

        return res.sendStatus(204);
        //return res.json('received')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteAdm = async (req: Request, res: Response) => {
    const { id_admin } = req.params;
    try {
        const result = await Administrador.delete({ id_admin: parseInt(id_admin) });

        if (result.affected === 0)//Si la longitud del usuario afectado es 0
            return res.status(404).json({ message: "Uusario no existe" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

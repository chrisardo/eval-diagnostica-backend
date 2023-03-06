import { Request, Response } from "express"
import { Upload } from "../entities/upload";

interface UploadBody {
    fname: string;    
    nombre: string;
    cod_mod_ie: number;
    fecha: Date;
}

export const getUploads = async (req: Request, res: Response) => {
    try {
        const uploads = await Upload.find();
        return res.json(uploads);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getUpload = async (req: Request, res: Response) => {
    try {
        const { id_upload } = req.params;
        const upload = await Upload.findOneBy({ id_upload: parseInt(id_upload) });//Buscar usuario por medio de su ID

        if (!upload) return res.status(404).json({ message: "Usuario no existe" });

        return res.json(upload);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createUpload = async (
    req: Request<unknown, unknown, UploadBody>,
    res: Response
) => {
    try {

        const { fname, nombre, cod_mod_ie, fecha} = req.body;
        const upload= new Upload();
        upload.fname = fname;
        upload.nombre = nombre;
        upload.cod_mod_ie = cod_mod_ie;
        upload.fecha = fecha;


        await upload.save();
        return res.json(upload);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateUpload = async (req: Request, res: Response) => {//Funcion para actulizar los datos de la tabla User
    const { id_upload } = req.params;

    try {
        const upload = await Upload.findOneBy({ id_upload: parseInt(id_upload) });
        if (!upload) return res.status(404).json({ message: "Usuario no existe" });

        await Upload.update({ id_upload: parseInt(id_upload) }, req.body);//

        return res.sendStatus(204);
        //return res.json('received')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteUpload = async (req: Request, res: Response) => {
    const { id_upload } = req.params;
    try {
        const result = await Upload.delete({ id_upload: parseInt(id_upload) });

        if (result.affected === 0)//Si la longitud del usuario afectado es 0
            return res.status(404).json({ message: "Uusario no existe" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

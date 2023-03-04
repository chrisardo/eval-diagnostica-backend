import { Request, Response } from "express"
import { Competencias} from "../entities/competencias";

interface CompetenciasBody {
    nombre: string;
    id_asignatura: number;
}

export const getCompetencias = async (req: Request, res: Response) => {
    try {
        const competencias = await Competencias.find();
        return res.json(competencias);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getCompetencia = async (req: Request, res: Response) => {
    try {
        const { id_competencia} = req.params;
        const competencia = await Competencias.findOneBy({ id_competencia: parseInt(id_competencia) });//Buscar usuario por medio de su ID

        if (!competencia) return res.status(404).json({ message: "Usuario no existe" });

        return res.json(competencia);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createCompetencia = async (
    req: Request<unknown, unknown, CompetenciasBody>,
    res: Response
) => {
    try {

        const { nombre, id_asignatura} = req.body;
        const competencia = new Competencias();
        competencia.nombre = nombre;
        competencia.id_asignatura = id_asignatura;

        await competencia.save();
        return res.json(competencia);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateCompetencia = async (req: Request, res: Response) => {//Funcion para actulizar los datos de la tabla User
    const { id_competencia } = req.params;

    try {
        const competencia = await Competencias.findOneBy({ id_competencia: parseInt(id_competencia) });
        if (!competencia) return res.status(404).json({ message: "Usuario no existe" });

        await Competencias.update({ id_competencia: parseInt(id_competencia) }, req.body);//

        return res.sendStatus(204);
        //return res.json('received')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteCompetencia = async (req: Request, res: Response) => {
    const { id_competencia} = req.params;
    try {
        const result = await Competencias.delete({ id_competencia: parseInt(id_competencia) });

        if (result.affected === 0)//Si la longitud del usuario afectado es 0
            return res.status(404).json({ message: "Uusario no existe" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

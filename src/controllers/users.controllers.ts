import { Request, Response } from "express"
import { User } from "../entities/User";

interface UserBody {
    firstname: string;
    lastname: string;
    email: string;
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await User.findOneBy({ id: parseInt(id) });//Buscar usuario por medio de su ID

        if (!user) return res.status(404).json({ message: "Usuario no existe" });

        return res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

/*
export const createUser = async (
    req: Request<unknown, unknown, UserBody>,
    res: Response
) => {
    const { firstname, lastname, email } = req.body;
    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email
    await user.save();
    return res.json(user);
};
*/

export const createUser = async (
    req: Request<unknown, unknown, UserBody>,
    res: Response
) => {
    try {

        const { firstname, lastname, email } = req.body;
        const user = new User();
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email

        await user.save();
        return res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateUser = async (req: Request, res: Response) => {//Funcion para actulizar los datos de la tabla User
    const { id } = req.params;

    try {
        const user = await User.findOneBy({ id: parseInt(id) });
        if (!user) return res.status(404).json({ message: "Usuario no existe" });

        await User.update({ id: parseInt(id) }, req.body);//

        return res.sendStatus(204);
        //return res.json('received')
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await User.delete({ id: parseInt(id) });

        if (result.affected === 0)//Si la longitud del usuario afectado es 0
            return res.status(404).json({ message: "Uusario no existe" });

        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};

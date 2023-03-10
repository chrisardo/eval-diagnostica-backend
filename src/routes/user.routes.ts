import { Router } from "express";
import {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/users.controllers"

const router = Router();

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;
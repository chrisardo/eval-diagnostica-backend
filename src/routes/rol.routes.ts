import { Router } from "express";
import {
    getRols,
    getRol,
    createRol,
    updateRol,
    deleteRol,
} from "../controllers/rol.controllers"

const router = Router();

router.get("/roles", getRols);

router.get("/roles/:id_rol", getRol);

router.post("/roles", createRol);

router.put("/roles/:id_rol", updateRol);

router.delete("/roles/:id_rol", deleteRol);

export default router;
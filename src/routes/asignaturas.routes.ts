import { Router } from "express";
import {
    getAsignaturas,
    getAsignatura,
    createAsignatura,
    updateAsignatura,
    deleteAsignatura,
} from "../controllers/asignaturas.controllers"

const router = Router();

router.get("/asignaturas", getAsignaturas);

router.get("/asignaturas/:id_asignatura", getAsignatura);

router.post("/asignaturas", createAsignatura);

router.put("/asignaturas/:id_asignatura", updateAsignatura);

router.delete("/asignaturas/:id_asignatura", deleteAsignatura);

export default router;
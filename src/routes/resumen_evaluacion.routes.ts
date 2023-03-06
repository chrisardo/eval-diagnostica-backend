import { Router } from "express";
import {
    getResumen_evaluaciones,
    getResumen_evaluacion,
    createResumen_evaluacion,
    updateResumen_evaluacion,
    deleteResumen_evaluacion,
} from "../controllers/resumen_evaluacion.controllers"

const router = Router();

router.get("/resu_evas", getResumen_evaluaciones);

router.get("/resu_evas/:id_resumen", getResumen_evaluacion);

router.post("/resu_evas", createResumen_evaluacion);

router.put("/resu_evas/:id_resumen", updateResumen_evaluacion);

router.delete("/resu_evas/:id_resumen", deleteResumen_evaluacion);

export default router;
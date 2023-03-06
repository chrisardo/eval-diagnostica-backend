import { Router } from "express";
import {
    getNivel_logros,
    getNivel_logro,
    createNivel_logro,
    updateNivel,
    deleteNivel_logro,
} from "../controllers/nivel.logro.controllers"

const router = Router();

router.get("/niveles", getNivel_logros);

router.get("/niveles/:id_nivel", getNivel_logro);

router.post("/niveles", createNivel_logro);

router.put("/niveles/:id_nivel", updateNivel);

router.delete("/niveles/:id_nivel", deleteNivel_logro);

export default router;
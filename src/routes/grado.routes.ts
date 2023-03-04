import { Router } from "express";
import {
    getGrados,
    getGrado,
    createGrado,
    updateGrado,
    deleteGrado,
} from "../controllers/grado.controllers"

const router = Router();

router.get("/grados", getGrados);

router.get("/grados/:id_grado", getGrado);

router.post("/grados", createGrado);

router.put("/grados/:id_grado", updateGrado);

router.delete("/grados/:id_grado", deleteGrado);

export default router;
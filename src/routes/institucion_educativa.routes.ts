import { Router } from "express";
import {
    getIES,
    getIE,
    createIE,
    updateIE,
    deleteIE,
} from "../controllers/institucion_educativa.controllers"

const router = Router();

router.get("/ies", getIES);

router.get("/ies/:id_ie", getIE);

router.post("/ies", createIE);

router.put("/ies/:id_grado", updateIE);

router.delete("/ies/:id_ie", deleteIE);

export default router;
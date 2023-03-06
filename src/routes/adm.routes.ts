import { Router } from "express";
import {
    getAdms,
    getAdm,
    createAdm,
    updateAdm,
    deleteAdm,
} from "../controllers/adm.controllers"

const router = Router();

router.get("/adms", getAdms);

router.get("/adms/:id_admin", getAdm);

router.post("/adms", createAdm);

router.put("/adms/:id_admin", updateAdm);

router.delete("/adms/:id_admin", deleteAdm);

export default router;
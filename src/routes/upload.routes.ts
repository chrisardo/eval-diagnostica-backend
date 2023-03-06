import { Router } from "express";
import {
    getUploads,
    getUpload,
    createUpload,
    updateUpload,
    deleteUpload,
} from "../controllers/upload.controllers"

const router = Router();

router.get("/uploads", getUploads);

router.get("/uploads/:id_upload", getUpload);

router.post("/uploads", createUpload);

router.put("/uploads/:id_upload", updateUpload);

router.delete("/uploads/:id_upload", deleteUpload);

export default router;
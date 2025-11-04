import express from "express";
import { deleteDesign, getAllDesigns, getDesignById, updateDesign, uploadDesign } from "../controllers/design.controller.js";

const router = express.Router();

router.get("/", getAllDesigns);
router.get("/:id", getDesignById);
router.post("/", uploadDesign);
router.put("/:id", updateDesign);
router.delete("/:id", deleteDesign);

export default router;
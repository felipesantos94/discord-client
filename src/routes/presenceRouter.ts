import { Router } from "express";
import {
  getAllPresenceActivities,
  getPresenceById,
  createPresenceActivity,
} from "../controller/presenceController";

const router = Router();

router.get("/getAll", getAllPresenceActivities);
router.get("/getById", getPresenceById);
router.post("/create", createPresenceActivity);

export default router;

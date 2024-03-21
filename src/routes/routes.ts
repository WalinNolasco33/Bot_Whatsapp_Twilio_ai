import { Router, urlencoded } from "express";
const router = Router();
router.use(urlencoded({ extended: false }));
import { messageRead } from "../controllers/read";
export default router.post("/", messageRead);

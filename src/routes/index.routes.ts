import { Router } from "express";
import { crypto } from "./sub-routes";

const router = Router();

router.use("/cryptos", crypto);

export default router;

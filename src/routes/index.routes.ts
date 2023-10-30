import { Router } from "express";
import { crypto, watcher } from "./sub-routes";

const router = Router();

router.use("/cryptos", crypto);
router.use("/watcher", watcher);

export default router;

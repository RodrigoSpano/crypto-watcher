import { Request, Response, Router } from "express";
import WatcherController from "../../controllers/Watcher.controller";

const router = Router();
const controllers: WatcherController = new WatcherController();

router.get(
  "/",
  (req: { query: { name: string; price: number } }, res: Response) =>
    controllers.spyCrypto(req, res)
);

export default router;

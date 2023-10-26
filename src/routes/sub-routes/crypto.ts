import { Router, Request, Response } from "express";
import CryptoCurrenciesController from "../../controllers/cryptoCurrencies.controller";

const router = Router();

const controllers = new CryptoCurrenciesController();

router.get("/", (req: Request, res: Response) =>
  controllers.getCurrencies(req, res)
);

export default router;

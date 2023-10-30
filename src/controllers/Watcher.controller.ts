import { Request, Response } from "express";
import WatcherModel from "../models/watcherModel";

export default class WatcherController {
  private Model: WatcherModel = new WatcherModel();

  async spyCrypto(
    req: { query: { name: string; price: number } },
    res: Response
  ) {
    try {
      console.log(req.query);
      await this.Model.spyPrice(req.query.name, Number(req.query.price));
      return res.status(200).json({
        message: `Spy method enabled. ${req.query.name} waiting for $${req.query.price}`,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

import { Request, Response } from "express";
import CryptoModel from "../models/cryptoModel";

export default class CryptoCurrenciesController {
  private CryptoModel: CryptoModel = new CryptoModel();

  async getCurrencies(req: Request, res: Response) {
    try {
      const data = await this.CryptoModel.getCurrencies();
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

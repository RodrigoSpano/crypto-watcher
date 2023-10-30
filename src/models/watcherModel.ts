import cron from "node-cron";
import { TCrypto } from "../utils/types/crypto";
import { IWatcherModel } from "../utils/types/watcher";
import CryptoModel from "./cryptoModel";
import sendEmail from "../services/nodemailer";

export default class WatcherModel implements IWatcherModel {
  private Crypto: CryptoModel = new CryptoModel();

  async findCoin(name: string): Promise<TCrypto> {
    const tokens = await this.Crypto.getCurrencies();
    const findCoin = tokens!.find((el) => el.slug === name);
    if (!findCoin) throw new Error("invalid coin name");
    return findCoin;
  }

  async spyPrice(coin: TCrypto, expectedValue: number): Promise<void> {
    cron.schedule("* * * * *", async () => {
      if (coin.quote.price.toFixed(2) == expectedValue.toFixed(2)) {
        await sendEmail(coin.name, coin.quote.price);
      }
    });
  }
}

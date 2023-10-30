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

  async spyPrice(name: string, expectedValue: number): Promise<void> {
    const task = cron.schedule("*/15 * * * * *", async () => {
      const token: TCrypto = await this.findCoin(name);
      if (token.quote.price.toString().startsWith(expectedValue.toString())) {
        // await sendEmail(coin.name, coin.quote.price);
        console.log(
          `reached, ${name} - actual: ${token.quote.price} - expected: ${expectedValue} `
        );
        task.stop();
      }
      console.log(`waiting for ${expectedValue}, now: ${token.quote.price}`);
    });
    task.start();
  }
}

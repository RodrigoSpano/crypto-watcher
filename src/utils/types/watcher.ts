import { TCrypto } from "./crypto";

export interface IWatcherModel {
  findCoin(name: string): Promise<void>;
  spyPrice(coin: TCrypto, expectedValue: number): Promise<TCrypto | undefined>;
}

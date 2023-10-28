import { TCrypto } from "./crypto";

export interface IWatcherModel {
  findCoin(name: string): Promise<TCrypto>;
  spyPrice(coin: TCrypto, expectedValue: number): Promise<void>;
}

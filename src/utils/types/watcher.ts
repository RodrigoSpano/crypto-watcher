import { TCrypto } from "./crypto";

export interface IWatcherModel {
  findCoin(name: string): Promise<TCrypto>;
  spyPrice(name: string, expectedValue: number): Promise<void>;
}

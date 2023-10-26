import { getLatestCurrencies } from "../utils/helpers/requests/listingsLatest.req";
import { ICryptoModel, TCrypto } from "../utils/types/crypto";

export default class CryptoModel implements ICryptoModel {
  async getCurrencies(): Promise<TCrypto[] | undefined> {
    return await getLatestCurrencies();
  }
}

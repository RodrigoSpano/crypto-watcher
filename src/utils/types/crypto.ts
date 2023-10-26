export type TCrypto = {
  id: number;
  name: string;
  slug: string;
  last_updated: string;
  quote: TCryptoQuote;
};

export type TCryptoQuote = {
  price: number;
  market_cap: number;
};

export interface ICryptoModel {
  getCurrencies(): Promise<TCrypto[] | undefined>;
}

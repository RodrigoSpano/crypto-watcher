import { TCrypto } from "../utils/types/crypto";

export const getLatestAdapter = (data: unknown | any): TCrypto[] => {
  const adaptedArr: TCrypto[] = data.map(
    (cr: unknown | any): TCrypto => ({
      id: cr.id,
      name: cr.name,
      symbol: cr.symbol,
      last_updated: cr.last_updated,
      slug: cr.slug,
      quote: {
        market_cap: cr.quote.USD.market_cap,
        price: cr.quote.USD.price,
      },
    })
  );
  return adaptedArr;
};

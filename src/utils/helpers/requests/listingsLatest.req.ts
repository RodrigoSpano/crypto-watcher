import axios from "axios";
import { getLatestAdapter } from "../../../adapters/getLatestAdapter";

const API_KEY = process.env.API_KEY;
const API_URI = process.env.API_URI;

export const getLatestCurrencies = async () => {
  try {
    const { data } = await axios(
      `${API_URI}/v1/cryptocurrency/listings/latest`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": API_KEY,
        },
      }
    );
    return getLatestAdapter(data.data);
  } catch (error) {}
};

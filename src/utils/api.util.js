import axios from "axios";
import { BASE_URL } from "../sample_front/configs/variables.config";

export const PagedProductReq = async (params) => {
  let count;
  try {
    const response = await axios.get(`${BASE_URL}/products?${params}`);
    const countRes = await axios.get(`${BASE_URL}/products`);
    const allData = await countRes.data;
    count = await allData.length;
    return {
      products: response.data,
      count: count,
      queryParams: params.toString()
    };
  } catch (e) {
    console.log(e.message);
  }
};

import md5 from "md5";
import {
  LIMIT,
  PASSWORD,
  PRODUCTS_ACTION,
  PRODUCTS_IDS_ACTION,
  TIMESTAMP,
  URL,
} from "./сonst";

const getAuthString = () => {
  const authString = md5(`${PASSWORD}_${TIMESTAMP}`);
  return authString;
};

const fetchProductsIds = async (offset: number = 0) => {
  try {
    const responseIds = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth": getAuthString(),
      },
      body: JSON.stringify({
        action: PRODUCTS_IDS_ACTION,
        params: { offset, limit: LIMIT },
      }),
    });

    const json = await responseIds.json();

    return json.result;
  } catch (e) {
    throw new Error("Ошибка при запросе к API");
  }
};

export async function fetchProducts(offset: number = 0) {
  const productsIds = await fetchProductsIds(offset);
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth": getAuthString(),
    },

    body: JSON.stringify({
      action: PRODUCTS_ACTION,
      params: { ids: productsIds },
    }),
  });
  const products = await response.json();
  return products.result;
}

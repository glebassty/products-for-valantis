const URL = "https://api.valantis.store:41000/";
const LIMIT = 50;
const PRODUCTS_IDS_ACTION = "get_ids";
const PRODUCTS_ACTION = "get_items";
const PASSWORD = "Valantis";
const TIMESTAMP = new Date().toISOString().split("T")[0].replace(/-/g, "");

export {
  URL,
  LIMIT,
  PRODUCTS_IDS_ACTION,
  PRODUCTS_ACTION,
  PASSWORD,
  TIMESTAMP,
};

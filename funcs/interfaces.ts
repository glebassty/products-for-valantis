export type SelectedBrandProps = {
  field: string;
  value: string;
};

export type SelectedPriceProps = {
  field: string;
  value: number;
};

export type SelectedProductProps = {
  field: string;
  value: string;
};

export interface ProductProps {
  id: string;
  product: string;
  price: number;
  brand: string;
}

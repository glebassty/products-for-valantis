import {
  extractBrands,
  extractPrices,
  extractProducts,
  removeDuplicatesFromStringArray,
  transformArrayPrices,
} from "@/funcs/utils";
import Select from "./ui/Select";
import { ProductProps } from "@/funcs/interfaces";

interface SelectsSectionProps {
  products: ProductProps[];
  handleSortValue: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  sortValue: string | number;
}

const SelectsSection = ({
  products,
  handleSortValue,
  sortValue,
}: SelectsSectionProps) => {
  const brands = removeDuplicatesFromStringArray(extractBrands(products));
  const prices = transformArrayPrices(extractPrices(products));
  const productsNames = removeDuplicatesFromStringArray(
    extractProducts(products)
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <h3>Сортировка по бренду</h3>
        <Select
          options={brands}
          onChange={handleSortValue}
          selectedOption={sortValue}
        />
      </div>
      <div>
        <h3>Сортировка по цене</h3>
        <Select
          options={prices}
          onChange={handleSortValue}
          selectedOption={sortValue}
        />
      </div>
      <div>
        <h3>Сортировка по названию</h3>
        <Select
          options={productsNames}
          onChange={handleSortValue}
          selectedOption={sortValue}
        />
      </div>
    </div>
  );
};

export default SelectsSection;

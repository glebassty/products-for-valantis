import { ProductProps } from "./interfaces";

 const removeDuplicates = (newProducts: ProductProps[]) => {
    const uniqueIds = new Set<string>();
    return newProducts.filter((newProduct) => {
      if (uniqueIds.has(newProduct.id)) {
        return false;
      } else {
        uniqueIds.add(newProduct.id);
        return true;
      }
    });
  };

  const extractBrands = (dataArray: ProductProps[]): string[] => {
    return dataArray.filter(item => item.brand !== null).map(item => item.brand!);
  };
  
  const extractProducts = (dataArray: ProductProps[]): string[] => {
    return dataArray.map(item => item.product);
  };
  
  const extractPrices = (dataArray: ProductProps[]): number[] => {
    return dataArray.map(item => item.price);
  };
  
  const filterProducts = (filterString:string, products: ProductProps[]) => {
    return products.filter(product => {
      if (product.product && product.product.includes(filterString)) {
        return true;
      }
      if (product.price === parseInt(filterString)) {
        return true;
      }
      if (product.brand && product.brand === filterString) {
        return true;
      }
      return false;
    });
  };

  const removeDuplicatesFromStringArray = (arr: string[]) => {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}
    
  const transformArrayPrices = (arr: number[]): number[] => {
    const uniqueArray: number[] = arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    uniqueArray.sort((a, b) => b - a);
    return uniqueArray;
}

  export {removeDuplicates, extractBrands, extractProducts, extractPrices, filterProducts, transformArrayPrices, removeDuplicatesFromStringArray}
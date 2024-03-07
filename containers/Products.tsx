"use client";

import React, { useState, useEffect } from "react";
import { fetchProducts } from "../funcs/fetchProducts";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import { ProductProps } from "@/funcs/interfaces";
import { filterProducts, removeDuplicates } from "@/funcs/utils";
import SelectsSection from "@/components/SelectsSection";

const Products: React.FC<{ initialData: ProductProps[] }> = ({
  initialData,
}) => {
  const [products, setProducts] = useState(removeDuplicates(initialData));
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sortValue, setSortValue] = useState<string>("");

  const handleSortValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(event.target.value);
  };

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      const offset = page > 1 ? page * 50 : 0;
      try {
        const nextPageProducts = await fetchProducts(offset);
        const uniqueProducts = removeDuplicates(nextPageProducts);
        const filteredProducts = filterProducts(sortValue, uniqueProducts);
        setProducts([...filteredProducts]);
      } catch (error) {
        console.error("Ошибка при получении данных", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [page, sortValue]);

  const handleBack = () => {
    setSortValue("");
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleForward = () => {
    setSortValue("");
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className="flex justify-between items-center border-solid border-b-2 border-purple-700 pb-8">
        <div className="flex">
          <Button onClick={handleBack} styles="mr-4">
            Назад
          </Button>
          <Button onClick={handleForward}>Вперед</Button>
        </div>
        <SelectsSection
          products={products}
          {...{
            sortValue,
            handleSortValue,
          }}
        />
        <div>
          <div>Страница: {page}</div>
          <div>Количество продуктов: {products.length}</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-8">
        {products.map((product: ProductProps) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default Products;

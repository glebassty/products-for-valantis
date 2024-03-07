import { ProductProps } from "@/funcs/interfaces";

const ProductCard = ({ id, product, price, brand }: ProductProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product}</h2>
        <p className="text-gray-600">ID: {id}</p>
        {brand && <p className="text-gray-600">Бренд: {brand}</p>}
        <p className="text-gray-800 mt-2">Цена: {price} руб.</p>
      </div>
    </div>
  );
};

export default ProductCard;

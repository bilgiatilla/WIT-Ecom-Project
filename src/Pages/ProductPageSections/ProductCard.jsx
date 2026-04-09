import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/shoppingCartActions";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const images = product?.images?.length ? product.images : [];
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [product]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handlePrev = () => {
    if (images.length === 0) return;
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (images.length === 0) return;
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!product) return null;

  const selectedImage = images[selectedIndex]?.url || images[0]?.url || "";

  return (
    <div className="px-10 bg-[#FAFAFA] flex flex-col lg:flex-row lg:gap-10">
      <div className="w-full max-w-125 mx-auto">
        <div className="relative">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full h-87.5 lg:h-125 object-cover rounded-md"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer"
              >
                <ChevronLeft className="w-10 h-10 text-white" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer"
              >
                <ChevronRight className="w-10 h-10 text-white" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-4 mt-4 flex-wrap">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`border-2 rounded-md overflow-hidden ${
                  selectedIndex === index
                    ? "border-blue-500"
                    : "border-transparent"
                } cursor-pointer`}
              >
                <img
                  src={image.url}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-5 flex-1">
        <h3 className="font-bold text-xl py-5">{product.name}</h3>

        <div className="flex flex-row gap-5 pb-5 items-center">
          <div className="flex gap-2">
            <span className="text-yellow-400 font-bold">★</span>
            <span className="text-[#737373] font-bold">{product.rating}</span>
          </div>
          <h5 className="font-bold text-[#737373]">
            {product.sell_count} Sales
          </h5>
        </div>

        <p className="text-black font-bold text-2xl">₺{product.price}</p>

        <p className="font-bold pb-5 pt-2">
          <span className="text-[#737373]">Availability :</span>{" "}
          <span className="text-[#23A6F0]">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </p>

        <p className="text-[#858585] pt-5 border-b pb-3">
          {product.description}
        </p>

        <div className="flex gap-3 mt-4 justify-start">
          <span className="size-8 rounded-full bg-blue-500"></span>
          <span className="size-8 rounded-full bg-[#2DC071]"></span>
          <span className="size-8 rounded-full bg-[#E77C40]"></span>
          <span className="size-8 rounded-full bg-[#252B42]"></span>
        </div>

        <div className="flex flex-row justify-between lg:justify-start lg:gap-5 pt-10">
          <button className="bg-[#23A6F0] text-white rounded-md py-2 px-6">
            Select Options
          </button>
          <Heart className="border size-9 p-2 rounded-full" />
          <button
            onClick={handleAddToCart}
            className="border size-9 p-2 rounded-full cursor-pointer hover:bg-gray-100 transition flex items-center justify-center"
          >
            <ShoppingCart className="w-full h-full" />
          </button>
          <Eye className="border size-9 p-2 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

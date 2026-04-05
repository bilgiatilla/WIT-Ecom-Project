import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const productImages = [
  "src/assets/ShopCards/card-cover-5.jpg",
  "src/assets/ShopCards/card-cover-6.jpg",
  "src/assets/ShopCards/card-cover-7.jpg",
];

function ProductCard() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1,
    );
  };
  return (
    <div className="px-10 bg-[#FAFAFA] flex flex-col lg:flex-row lg:gap-10">
      <div className="w-full max-w-125 mx-auto">
        <div className="relative">
          <img
            src={productImages[selectedIndex]}
            alt={`Product ${selectedIndex + 1}`}
            className="w-full h-87.5 object-cover"
          ></img>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer"
          >
            <ChevronLeft className="w-15 h-15 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full cursor-pointer"
          >
            <ChevronRight className="w-15 h-15 text-white" />
          </button>
        </div>
        <div className="flex gap-4 mt-4">
          {productImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`border-2 ${
                selectedIndex === index
                  ? "border-blue-500"
                  : "border-transparent"
              } cursor-pointer`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl py-5">Graphic Design</h3>
        <div className="flex flex-row gap-5 pb-5">
          <div className="flex gap-0.5">
            <span className="fa fa-star checked text-yellow-400 "></span>
            <span className="fa fa-star checked text-yellow-400"></span>
            <span className="fa fa-star checked text-yellow-400"></span>
            <span className="fa fa-star checked text-yellow-400"></span>
            <span className="fa-regular fa-star text-yellow-400"></span>
          </div>
          <h5 className="font-bold text-[#737373]">10 Reviews</h5>
        </div>
        <p className="text-black font-bold text-2xl">$6.48</p>
        <p className="font-bold pb-5">
          <span className="text-[#737373]">Availability :</span>{" "}
          <span className="text-[#23A6F0]">In Stock </span>
        </p>
        <p className="text-[#858585] pt-5 border-b pb-3">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <div className="flex gap-3 mt-2 justify-start">
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
          <ShoppingCart className="border size-9 p-2 rounded-full" />
          <Eye className="border size-9 p-2 rounded-full" />
        </div>
      </div>
    </div>
  );
}
export default ProductCard;

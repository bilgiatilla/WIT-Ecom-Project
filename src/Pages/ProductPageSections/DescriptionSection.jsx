import { ChevronRight } from "lucide-react";

function DescriptionSection({ product }) {
  if (!product) return null;

  return (
    <div className="p-5">
      <div className="flex flex-row justify-between lg:justify-center lg:gap-10 font-bold border-b pb-4">
        <button type="button">Description</button>
        <button type="button">Additional Information</button>
        <button type="button">
          Reviews <span>(0)</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 pt-10">
        <div className="w-80 aspect-square overflow-hidden rounded-xl shadow-xl mx-auto mt-5 lg:mt-0 flex-1">
          <img
            className="w-full h-full object-cover object-center"
            src={product.images?.[0]?.url}
            alt={product.name}
          />
        </div>

        <div className="pt-5 mx-2 lg:mx-7 flex-1">
          <h3 className="text-center lg:text-start text-2xl font-bold">
            Product Description
          </h3>

          <p className="py-5 text-[#737373]">
            {product.description}
          </p>

          <p className="py-5 text-[#737373]">
            This product belongs to category ID {product.category_id} and comes
            from store ID {product.store_id}.
          </p>

          <p className="py-5 text-[#737373]">
            It currently has a rating of {product.rating} and a total sales count
            of {product.sell_count}.
          </p>
        </div>

        <div className="flex-1">
          <h1 className="text-center lg:text-start text-2xl font-bold py-5 lg:py-0 lg:pb-10">
            Product Details
          </h1>

          <ul>
            <li className="flex py-2 text-[#737373]">
              <ChevronRight className="mr-5 shrink-0" />
              Product Name: {product.name}
            </li>
            <li className="flex py-2 text-[#737373]">
              <ChevronRight className="mr-5 shrink-0" />
              Price: ₺{product.price}
            </li>
            <li className="flex py-2 text-[#737373]">
              <ChevronRight className="mr-5 shrink-0" />
              Stock: {product.stock}
            </li>
            <li className="flex py-2 text-[#737373]">
              <ChevronRight className="mr-5 shrink-0" />
              Rating: {product.rating}
            </li>
          </ul>

          <h1 className="text-center lg:text-start text-2xl font-bold py-10">
            Extra Info
          </h1>

          <ul>
            <li className="flex py-2 text-[#737373]">
              <ChevronRight className="mr-5 shrink-0" />
              Category ID: {product.category_id}
            </li>
            <li className="flex py-2 text-[#737373]">
              <ChevronRight className="mr-5 shrink-0" />
              Store ID: {product.store_id}
            </li>
            <li className="flex py-2 text-[#737373]">
              <ChevronRight className="mr-5 shrink-0" />
              Total Sales: {product.sell_count}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
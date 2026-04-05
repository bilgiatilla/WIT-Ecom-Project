import { ChevronDown, LayoutGrid, ListChecks } from "lucide-react";
import { useState } from "react";
import Pagination from "../../Components/Pagination.jsx";
import BrandLogos from "../../Components/Services.jsx";
import bestseller from "../../assets/Bestseller/bestseller1.png";

function ShopProducts() {
  const [open, setOpen] = useState(false);

  const products = [
    { id: 1, image: {bestseller} },
    { id: 2, image: {bestseller} },
    { id: 3, image: {bestseller} },
    { id: 4, image: {bestseller} },
    { id: 5, image: {bestseller} },
    { id: 6, image: {bestseller} },
    { id: 7, image: {bestseller} },
    { id: 8, image: {bestseller} },
    { id: 9, image: {bestseller} },
    { id: 10, image: {bestseller} },
    { id: 11, image: {bestseller} },
    { id: 12, image: {bestseller} },
  ];
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="pt-10 flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row justify-between px-10 gap-3">
      <h6 className="text-[#737373] font-bold text-lg">
        Showing all 12 results
      </h6>
      <div className="flex flex-row justify-center gap-3 font-bold">
        <h6 className="text-[#737373] p-3">Views:</h6>
        <div className="border p-3 rounded-md inline-flex">
          <LayoutGrid className="" />
        </div>
        <div className="border p-3 rounded-md inline-flex">
          <ListChecks className="" />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-5">
        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-2 bg-[#F9F9F9] text-[#737373] rounded-md hover:bg-[#9a9a9a] border-[#737373] transition flex flex-row"
        >
          Popularity <ChevronDown className="" />
        </button>
        {open && (
          <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg border z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Clothes
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Shoes
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Accessories
              </li>
            </ul>
          </div>
        )}
        <h6 className="bg-[#23A6F0] text-white font-bold px-5 pt-2 rounded-md cursor-pointer">
          Filter
        </h6>
      </div>
      </div>
      <section className="px-10 lg:px-40 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="text-center grid gap-2 py-5 justify-center"
            >
              <img src={product.image} />

              <h3 className="font-bold">Graphic Design</h3>
              <p className="text-[#737373] font-bold">English Department</p>
              <p className="font-bold">
                <span className="text-[#BDBDBD]">$16.48</span>{" "}
                <span className="text-[#23856D]">$6.48</span>
              </p>
              <div className="flex gap-2 mt-2 justify-center">
                <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                <span className="w-4 h-4 rounded-full bg-green-700"></span>
                <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                <span className="w-4 h-4 rounded-full bg-gray-800"></span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="py-10 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={4}
          onPageChange={setCurrentPage}
          className= ""
        />
      </div>
      <BrandLogos/>
    </div>
  );
}

export default ShopProducts;

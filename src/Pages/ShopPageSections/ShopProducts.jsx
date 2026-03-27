import { ChevronDown, LayoutGrid, ListChecks } from "lucide-react";
import { useState } from "react";

function ShopProducts() {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <h6>Showing all 12 results</h6>
      <div className="flex flex-row justify-center">
        <h6>Views:</h6>
        <LayoutGrid />
        <ListChecks />
      </div>
      <div className="flex flex-row justify-center gap-5">
        <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-[#DDDDDD] text-[#737373] rounded-md hover:bg-[#9a9a9a] transition flex flex-row"
      >Popularity <ChevronDown className=""/></button>
      {open && (
        <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg border z-10">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Clothes</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Shoes</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Accessories</li>
          </ul>
        </div>
        )}
        <h6 className="">Filter</h6>
      </div>
    </div>
  );
}

export default ShopProducts;

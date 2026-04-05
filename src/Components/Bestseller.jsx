import { Link } from "react-router-dom";
import bestseller1 from "../assets/Bestseller/bestseller1.png";

function Bestseller() {
  const products = [
    { id: 1, image: bestseller1 },
    { id: 2, image: bestseller1 },
    { id: 3, image: bestseller1 },
    { id: 4, image: bestseller1 },
    { id: 5, image: bestseller1 },
    { id: 6, image: bestseller1 },
    { id: 7, image: bestseller1 },
    { id: 8, image: bestseller1 },
  ];
  return (
    <section className="px-10 lg:px-40 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
        <div className="text-center grid gap-2 py-5 justify-center">
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
        </Link>
      ))}
      </div>
    </section>
  );
}

export default Bestseller;

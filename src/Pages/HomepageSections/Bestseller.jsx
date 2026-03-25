function Bestseller() {
  const products = [
    { id: 1, image: "src/assets/Bestseller/bestseller1.png" },
    { id: 2, image: "src/assets/Bestseller/bestseller1.png" },
    { id: 3, image: "src/assets/Bestseller/bestseller1.png" },
    { id: 4, image: "src/assets/Bestseller/bestseller1.png" },
    { id: 5, image: "src/assets/Bestseller/bestseller1.png" },
    { id: 6, image: "src/assets/Bestseller/bestseller1.png" },
    { id: 7, image: "src/assets/Bestseller/bestseller1.png" },
    { id: 8, image: "src/assets/Bestseller/bestseller1.png" },
  ];
  return (
    <section className="px-10 justify-center">
      <div className="grid gap-3 text-center p-10">
        <h4 className="text-lg">Featured Products</h4>
        <h3 className="font-bold text-xl">BESTSELLER PRODUCTS</h3>
        <p className="text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      {products.map((product) => (
        <div key={product.id} className="text-center grid gap-2 py-5 justify-center">
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
    </section>
  );
}

export default Bestseller;

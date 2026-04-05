import Bestseller from "../../Components/Bestseller";

function BestsellerProducts() {
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
    <section className="px-10 lg:px-40 justify-center">
      <div className="grid gap-3 text-center p-10">
        <h4 className="text-lg">Featured Products</h4>
        <h3 className="font-bold text-xl">BESTSELLER PRODUCTS</h3>
        <p className="text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <Bestseller/>
    </section>
  );
}

export default BestsellerProducts;

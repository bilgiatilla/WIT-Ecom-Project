import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bestseller from "../../Components/Bestseller";
import { fetchProducts, fetchCategories } from "../../store/thunks/productThunks";

function BestsellerProducts() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.product.productList);
  const categories = useSelector((state) => state.product.categories);
  const fetchState = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }

    if (!productList.length) {
      dispatch(fetchProducts({ limit: 8, offset: 0 }));
    }
  }, [dispatch, categories.length, productList.length]);

  return (
    <section className="px-10 lg:px-40 justify-center">
      <div className="grid gap-3 text-center p-10">
        <h4 className="text-lg">Featured Products</h4>
        <h3 className="font-bold text-xl">BESTSELLER PRODUCTS</h3>
        <p className="text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>
      {fetchState === "FETCHING" && !productList.length ? (
        <div className="py-20 flex justify-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <Bestseller products={productList.slice(0, 8)} />
      )}
    </section>
  );
}

export default BestsellerProducts;

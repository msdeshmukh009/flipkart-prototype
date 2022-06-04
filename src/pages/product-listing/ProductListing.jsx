import "./productListing.css";
import { useReducer } from "react";
import { Filters, Navbar, ProductCard } from "../../components";
import { products } from "../../data";
import { sortProducts, filterProducts } from "../../utils";
import { filterReducer } from "../../reducers";

const ProductListing = () => {
  const [filteredProductsState, filterDispatch] = useReducer(filterReducer, {
    products,
    sortBy: "",
    sizes: [],
    categories: [],
    idealFor: [],
  });

  const sortedProducts = sortProducts(filteredProductsState.sortBy, filteredProductsState.products);
  const filteredProductsList = filterProducts(filteredProductsState, sortedProducts);

  return (
    <div className="product-listing-layout">
      <Navbar />
      <Filters filterDispatch={filterDispatch} filteredProductsState={filteredProductsState} />

      <div className="main-products py-2">
        {filteredProductsList.length === 0 && (
          <h1 className="text-2xl text-center">No Products Found</h1>
        )}
        {filteredProductsList.map(product => (
          <ProductCard key={product.objId} product={product} />
        ))}
      </div>
    </div>
  );
};
export { ProductListing };

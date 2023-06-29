import { useState } from "react";
import "../styles/Font.css";
import "../styles/ProductsListComponent.css";
import ProductList from "./ProductList";

function ProductsComponent() {
  const [choosenProductList, setChoosenProductList] = useState("bandage");
  return (
    <div className="products-list-container">
      <div className="product-menu">
        <div
          className="product-menu-list"
          onClick={() => setChoosenProductList("bandage")}
        >
          ԲԻՆՏԵՐ
        </div>
        <div
          className="product-menu-list"
          onClick={() => setChoosenProductList("tanzifs")}
        >
          ԹԱՆԶԻՖՆԵՐ
        </div>
        <div
          className="product-menu-list"
          onClick={() => setChoosenProductList("napkins")}
        >
          ԱՆՁԵՌՈՑԻԿՆԵՐ
        </div>
        <div
          className="product-menu-list"
          onClick={() => setChoosenProductList("topers")}
        >
          ԹՈՓԵՐ
        </div>
      </div>
      <ProductList productListFilter={choosenProductList} />
    </div>
  );
}

export default ProductsComponent;

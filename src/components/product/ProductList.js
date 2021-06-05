import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import './ProductItem.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  let urlProduct = "https://fakestoreapi.com/products";

  useEffect(() => {
    getProducts(urlProduct);
  }, [urlProduct]);

  const getProducts = async (url) => {
    let response = await axios(url);
    // console.log(response.data);
    setProducts(response.data);
  };

  return (
    <div id="products" class="row view-group">
      {products.map((item, index) => (
        <div class="item col-xs-4 col-lg-4">
          <ProductItem key={index} product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetAxios from "../../HttpRequest";

const ProductDetails = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  let productDetails = useGetAxios(url);
  let content = null;

  if (productDetails.data) {
    content = (
      <div className="list-group">
        <a
          href="#"
          class="list-group-item list-group-item-action flex-column align-items-center justify-content-center"
        >
          <div class="d-flex flex-column align-items-center w-100 justify-content-between">
            <h5 class="mb-2 display-4">{productDetails.data.category.toUpperCase()}</h5>
              <img
                src={productDetails.data.image}
                alt={productDetails.data.title}
                width="200"
              />
              <h2
                class="badge badge-success text-white mt-4 p-2"
                style={{ fontSize: "25px" }}
              >
                {productDetails.data.price} TL
              </h2>
            <p class="mb-1">{productDetails.data.description}</p>
          </div>
        </a>
        <a href="/" className="btn btn-outline-info btn-block">
          Anasayfaya Dön
        </a>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default ProductDetails;

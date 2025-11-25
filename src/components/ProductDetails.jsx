import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

import "../css/ProductDetails.css";
function ProductDetails() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count + -1);
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { price, image, title, description } = selectedProduct;
  const dispatch = useDispatch();
  useEffect(() => {
    getProductById();
  }, []);
  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };
  return (
    <div className="main-product-detail">
      <div style={{ marginRight: "40px" }}>
        <img src={image} width={300} height={500} alt="" />
      </div>
      <div>
        <h1 className="product-detail-title">{title}</h1>
        <h3 className="product-detail-description">{description}</h3>
        <h1 className="product-detail-price">{price} ₺</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CiCirclePlus className="plus_and_minus-button" onClick={increment} />
          <span style={{ fontSize: "35px" }}>{count}</span>
          <CiCircleMinus
            className="plus_and_minus-button"
            onClick={decrement}
          />
        </div>
        <div>
          <button className="add-to-cart-button">Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

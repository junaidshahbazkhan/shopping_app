import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../store/productDataSlice";

const ProductListing = () => {
  // const products = useSelector((state) => state.products.productData);
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err, "err");
      });
    // console.log(response);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="ui grid"
      style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
    >
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

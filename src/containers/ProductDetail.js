import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleProduct } from "../store/productDataSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.products.singleProductData);
  const getData = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setSingleProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") getData();
  }, [productId]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="ui grid container" style={{}}>
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div>
            <div>
              <div>
                <img
                  src={product.image}
                  height="300px"
                  width="300px"
                  style={{ padding: "30px" }}
                />
              </div>
              <div>
                <h1 style={{ color: "#00aeef" }}>{product.title}</h1>
                <h2>
                  <a style={{ color: "#00aeef" }}>${product.price}</a>
                </h2>
                <h3 style={{ color: "#00000099" }}>{product.category}</h3>
                <p style={{ color: "#00000099" }}>{product.description}</p>
                <div>
                  <button
                    style={{
                      cursor: "pointer",
                      padding: "0.7rem 1rem",
                      border: "none",
                      backgroundColor: "#00aeef",
                      color: "white",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

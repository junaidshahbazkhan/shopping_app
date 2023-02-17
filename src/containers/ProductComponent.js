import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "../store/productDataSlice";

const ProductComponent = () => {
  const products = useSelector((state) => state.products.productData);
  const dispatch = useDispatch();
  const renderList = products.map((product) => {
    const { id, category, image, price, title } = product;
    return (
      <>
        <div className="three wide column" key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards" style={{ height: "350px" }}>
              <div className="card">
                <div style={{ padding: "10px" }}>
                  <img src={image} alt={title} height="200px" width="170px" />
                </div>
                <div
                  className="content"
                  style={{ textAlign: "start", padding: "15px" }}
                >
                  <div
                    style={{ fontWeight: 600, color: "#00aeef" }}
                  >{`${title.slice(0, 30)}`}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </Link>
          <div style={{ marginTop: "5px" }}>
            <button
              style={{
                backgroundColor: "unset",
                border: "none",
                color: "#00aeef",
                padding: "unset",
                cursor: "pointer",
              }}
              onClick={() => dispatch(removeProduct(id))}
            >
              Remove
            </button>
          </div>
        </div>
      </>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;

import React from "react";

export const Product = (props) => {
  const { id, description, name, price, productImage, status } = props.data;
  return (
    <div className="product col-xs-12 col-sm-12 col-md-6 col-lg-4">
      <div style={{ height: "400px" }} className="card-img-top">
        <img
          src={productImage}
          alt={name}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      <div className="card-body mt-3 mb-5">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">€ {price}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">{status}</p>
      </div>
    </div>
  );
};

export default Product;

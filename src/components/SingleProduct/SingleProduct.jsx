import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { useState } from "react";

function SingleProduct({img,title,price}) {
    const [cartHover, setCartHover] = useState(false);

  return (
    <>
    <img
      src={img}
      alt=""
      className={`col-3 col-sm-4 col-md-5 col-lg-6 ${
        cartHover ? "img_hovered" : "img"
      }`}
    />
    <div className="col-7 prod_details ">
      <h6 className="product_detail product_title">{title}</h6>
      <div className="d-flex align-items-center product_detail">
        <div>
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaRegStar className="star" />
        </div>
        <div style={{ color: "#007185" }}>120</div>
      </div>
      <div className="product_detail price">
        <sup>
          <BiRupee />
        </sup>
        {price}
        <sup>00</sup>
      </div>
      <div className="product_detail price_offer">
        M.R.P.:{" "}
        <sup>
          <BiRupee />
        </sup>
        <del>{120 * 3} </del>
        <span className="price_off">(66.66% off) </span>
      </div>
      <button
        className="btn btn-primary product_detail"
        style={{ zIndex: 2, position: "relative" }}
      >
        Add to cart
      </button>
    </div>
    <div
      onMouseOver={() => setCartHover(true)}
      onMouseLeave={() => setCartHover(false)}
      className="next_hero"
    >
    </div>
  </>
  )
}

export default SingleProduct
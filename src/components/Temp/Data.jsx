import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import SingleProduct from '../SingleProduct/SingleProduct';
import '../SingleProduct/singleProduct.css'
function Data() {
    const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="d-flex flex-column flex-md-row justify-content-md-between justify-content-lg-evenly flex-wrap ">
        {/* add some more products with images from data base now or later
        <hr /> first complete app functionality */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          product &&
          product.map((item) => {
            return (
              <span
                className="d-flex justify-content-around align-items-center flex-md-column col-md-5 col-lg-3 main"
                key={item.id}
              >
                <SingleProduct
                  img={item.image}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  // cartHover={cartHover}
                />
              </span>
            );
          })
        )}
      </div>
  )
}

export default Data
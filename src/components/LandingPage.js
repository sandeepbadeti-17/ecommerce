import React from 'react'

function LandingPage({ img, no }) {
  return (
    <div className="landingPage row justify-content-md-center align-items-center">
        <img
          src={img}
          class="d-block product_img col-lg-3 order-lg-2"
          alt="..."
        />
        <div className="landing_product col-lg-6 order-lg-1">
          <div style={{ letterSpacing: "2px", fontWeight: "lighter" }}>
            Trending No.{no}
          </div>
          <h1 className="product_title">One pluse bass blutooth earphones</h1>
          <div className="product_description row">
            <div className="col-lg-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              odio eveniet, animi vitae harum, iure beatae, voluptatum
              voluptatibus temporibus id sed explicabo quide.
            </div>
          </div>
          <button className="btn btn-primary product_btn">Buy Product</button>
        </div>
      </div>
  )
}

export default LandingPage

  
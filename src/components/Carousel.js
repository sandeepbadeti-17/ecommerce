import React from 'react'
import LandingPage from "./LandingPage";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <LandingPage
              img={
                "https://cdn.pixabay.com/photo/2022/10/14/08/03/earbuds-7520738_960_720.jpg"
              }
              no={1}
            />
          </div>
          <div class="carousel-item ">
            <LandingPage
              img={
                "https://cdn.pixabay.com/photo/2022/10/14/08/03/earbuds-7520738_960_720.jpg"
              }
              no={2}
            />
          </div>
          <div class="carousel-item ">
            <LandingPage
              img={
                "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612_960_720.jpg"
              }
              no={3}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel
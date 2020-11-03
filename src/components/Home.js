import React, { useState } from "react";
import "../css/Home.css";
import Product from "./Product";
import { data } from "../data";

function Home() {
  const [slideShows] = useState(data);

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="slider-1"
        />
        <div className="home_row">
          {slideShows.map((slideshow) => (
            <Product
              id={slideshow.id}
              title={slideshow.title}
              price={slideshow.price}
              image={slideshow.image}
              rating={slideshow.rating}
              amount={slideshow.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

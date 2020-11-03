import React, { useContext, useEffect, useState } from "react";
import "../css/Home.css";
import { StateContext } from "../StateProvider";
import Product from "./Product";
import { data } from "../data";
import Fuse from "fuse.js";

function SearchResult() {
  const { searchTerm } = useContext(StateContext);
  const [slideShows, setSlideShows] = useState(data);

  console.log(searchTerm);

  useEffect(() => {
    const fuse = new Fuse(slideShows, {
      keys: ["title"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideShows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideShows(results);
    } else {
      setSlideShows(data);
    }
    console.log("this is result >> " + results);
  }, [searchTerm, slideShows]);
  return (
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
  );
}

export default SearchResult;

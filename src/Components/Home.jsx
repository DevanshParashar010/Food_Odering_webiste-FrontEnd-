import React from "react";
import FeaturedProducts from "./FeaturedProducts";

export default function Home() {
  return (
    <>
      <div>
        <img
          className="image-container"
          src="src/pexels-rajesh-tp-1600727.jpg"
          alt=""
        />
      </div>
      <FeaturedProducts />
      <img className="image-container-2" src="src/463.jpg" alt="" />
    </>
  );
}

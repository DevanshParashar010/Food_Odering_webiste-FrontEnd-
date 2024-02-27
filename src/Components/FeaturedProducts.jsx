import React from "react";
import { menu } from "../data";
export default function FeaturedProducts() {
  return (
    <div>
      <div className="bg-danger text-light d-flex justify-content-around">
        {menu.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                width: "18rem",
                border: "2px solid white",
                margin: "30px",
                padding: "11px",
              }}
              className="item rounded"
            >
              <img src={item.img} className="card-img-top" alt="..." />

              <h5>{item.title}</h5>
              <p>{item.desc}</p>
              {/* 
              <button className="btn btn-warning text-light buttonCart">
                 ${item.price}
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

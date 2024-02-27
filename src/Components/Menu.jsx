import React from "react";
import { featuredProducts } from "../data";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {featuredProducts.map((item) => {
              return (
                <div className="col" key={item.id}>
                  <div className="card shadow-sm">
                    <img
                      src={item.img}
                      alt="error"
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                    />

                    <div className="card-body">
                      <h6>{item.title}</h6>
                      <p className="card-text">{item.desc}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link
                            to={`/Menu/${item.id}`}
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Options
                          </Link>
                        </div>
                        <small className="text-body-secondary">
                          ${item.price}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
// {`/product/${props.id}`}

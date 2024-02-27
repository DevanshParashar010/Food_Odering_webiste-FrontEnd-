import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { featuredProducts } from "../data";
import { ItemList } from "../store/item-list-store";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
export default function SingleProduct() {
  const { itemId } = useParams();
  const product = featuredProducts.find((e) => e.id === Number(itemId));
  const { addToCart } = useContext(ItemList);

  return (
    <div>
      <div className="Sproduct" key={product.id}>
        <div className="card shadow-sm">
          <img
            src={product.img}
            alt="error"
            className="S-img"
            width="25%"
            height=""
          />

          <div className="card-body">
            <h6>{product.title}</h6>
            <p className="card-text">{product.desc}</p>
            <div className="d-flex justify-content-evenly align-items-center">
              <div className="btn-group">
                {/* <div type="button" className="btn btn-sm btn-outline-secondary"> */}
                {product.options.map((item) => {
                  const [count, setCount] = useState(1);
                  function decrease() {
                    if (count > 1) {
                      setCount(count - 1);
                      props.setPquantity(count);
                    }
                  }
                  function increase() {
                    if (count < 5) {
                      setCount(count + 1);
                      props.setPquantity(count);
                    }
                  }

                  const sum =
                    Number(`${product.price}`) +
                    Number(`${item.additionalPrice}`);
                  return (
                    <div
                      type="button"
                      className="btn btn-sm btn-outline-secondary "
                    >
                      
                      <span>
                      {item.title} <br />${sum} &nbsp; &nbsp;
                        <FaCircleMinus onClick={decrease} />
                        <span>{count}</span>
                        <FaCirclePlus onClick={increase} />
                      </span> <br/>
                      <NavLink
                        key={item.additionalPrice}
                        to="/Cart"
                        onClick={() =>
                          addToCart(product, product.id, sum, item.title,count)
                        }
                      >
                       
                          <button className="btn btn-sm btn-outline-danger buttonCart ">
                            Add To cart
                          </button>
                     
                      </NavLink>
                    </div>
                  );
                })}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useContext } from "react";
import { ItemList } from "../store/item-list-store";
import { MdDelete } from "react-icons/md";
import CartItem from "./CartItem";
export default function Cart() {
  const { cart, removeItem } = useContext(ItemList);

  let Total = 0;
  let Quantity = cart.length;
  return (
    <>
      <ul className="list-group list-group-flush">
        {cart.map((item) => {
          Total += item.price;
          return (
            <CartItem
              key={item.id}
              {...item}
              Total={Total}
              Quantity={Quantity}
            />
          );
        })}
      </ul>
      <div
        className="card"
        style={{
          width: "18rem",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {Quantity === 0 ? (
          <center>
            <strong>Your Cart Is Empty </strong>
          </center>
        ) : (
          <div className="card-body">
            <h5 className="card-title">Cart Total</h5>

            <p className="card-text" style={{fontWeight:"bold"}}>
              Total Amount : &nbsp; ${Total}
            </p>

            <button className="btn btn-danger">Proceed to Buy </button>
          </div>
        )}
      </div>
    </>
  );
}

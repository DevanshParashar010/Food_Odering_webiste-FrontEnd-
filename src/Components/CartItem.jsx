import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { ItemList } from "../store/item-list-store";

export default function CartItem(props) {
  // const [count, setCount] = useState(1);
  // // function decrease() {
  //   if (count > 1) {
  //     setCount(count - 1);
  //     props.setPquantity(count);
  //   }
  // }
  // function increase() {
  //   if (count < 5) {
  //     setCount(count + 1);
  //     props.setPquantity(count);
  //   }
  // }

  const { cart, removeItem } = useContext(ItemList);
  return (
    <div>
      {" "}
      <li className="list-group-item" key={props.id}>
        <div id="carbonads">
          <span>
            <span className="carbon-wrap">
              <img
                src={props.img}
                alt="ads via Carbon"
                border="0"
                height="100"
                width="130"
                data-no-statview="no"
                style={{ maxWidth: "130px" }}
              />

              <span className="carbon-text ">
                &nbsp; &nbsp;{" "}
                <strong>
                  {props.title} {props.Subtitle}:
                </strong>
              </span>
            </span>
           
          
            <span className="carbon-poweredby PriceCartSpan">
              {" "}
              &nbsp; ${props.price}({props.Producr_quantity})
            </span>
            <span style={{ float: "right", cursor: "pointer" }}>
              <MdDelete
                onClick={() => {
                  window.confirm(
                    `Are you sure you want to delete ${props.title} ${props.Subtitle}?`
                  ) && removeItem(props.id, props.Subtitle);
                }}
              />
            </span>
          </span>
        </div>
      </li>
    </div>
  );
}

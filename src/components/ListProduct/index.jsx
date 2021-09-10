import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListProduct() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    console.log("RESPONSE");
    axios
      .get("http://localhost:3003/products/")
      .then((response) => {
      })
      .catch((error) => {
        console.error(error.massege);
      });
  };
  return (
    <div>
      {list &&
        list.map((item) => {
          return (
            <div>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.qty_stock}</p>

              <button>-</button>
              <button>+</button>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

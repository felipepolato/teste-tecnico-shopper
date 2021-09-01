import React, { useState } from "react";

export default function ListProduct() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "AZEITE",
      price: 20.49,
      qty_stock: 158,
    },

    {
      id: 2,
      name: "Shampoo",
      price: 10.0,
      qty_stock: 58,
    },
  ]);




  return (
  <div>
      {list&&list.map((item)=>{
          return(
              <div>
                  <p>{item.id}</p>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{item.qty_stock}</p>
                  <hr/>
              </div>
          )
      })}
  </div>
  );
}

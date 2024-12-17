import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => (
  <div>
    {items.map(item => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.author}</p>
        <Link to={`/item/${item.id}`}>Ver más</Link>
      </div>
    ))}
  </div>
);

export default ItemList;

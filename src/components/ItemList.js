import React from "react";
import { Link } from "react-router-dom";
import "../styles/ItemList.css";

function ItemList({ items }) {
  return (
    <div className="grid">
      {items.map((item) => {
        return (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="card-img" />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <Link to={`/item/${item.id}`} className="btn">
              View Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;

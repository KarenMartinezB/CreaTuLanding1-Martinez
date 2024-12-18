import React from "react";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <p>⭐ {item.reviews}</p>
          <Link to={`/item/${item.id}`} className="btn">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;

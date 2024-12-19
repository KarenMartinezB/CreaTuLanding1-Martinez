import React from "react";
import { Link } from "react-router-dom";
import "../styles/ItemList.css";

function ItemList({ items }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} className="card-img" />
          <h3>{item.title}</h3>
          <p>Autor: {item.author}</p>
          <p>Categoria: {item.category}</p>
          <p>Precio: ${item.price}</p>
          <Link to={`/item/${item.id}`} className="btn">
            Ver detalles
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;

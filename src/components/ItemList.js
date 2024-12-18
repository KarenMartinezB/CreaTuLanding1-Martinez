import React from "react";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  return (
    <div className="row">
      {items.map((item) => (
        <div key={item.id} className="col-md-3 mb-4">
          <div className="card h-100">
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p>${item.price}</p>
              <Link to={`/item/${item.id}`} className="btn btn-primary">
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;

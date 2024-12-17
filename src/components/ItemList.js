import React from "react";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  return (
    <div className="row">
      {items.map((book) => (
        <div key={book.id} className="col-md-3 mb-4">
          <div className="card h-100">
            <img src={book.image} className="card-img-top" alt={book.title} />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">${book.price}</p>
              <Link to={`/item/${book.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;

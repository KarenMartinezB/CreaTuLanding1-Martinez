import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function ItemDetailContainer() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const bookRef = doc(db, "books", id);
      const bookSnap = await getDoc(bookRef);
      if (bookSnap.exists()) {
        setBook(bookSnap.data());
      }
    };
    fetchBook();
  }, [id]);

  return (
    <div className="container mt-4">
      {book ? (
        <div className="row">
          <div className="col-md-6">
            <img src={book.image} alt={book.title} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{book.title}</h2>
            <p>{book.synopsis}</p>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <p>Reviews: {book.reviews}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;

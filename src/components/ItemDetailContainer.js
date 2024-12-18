import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useParams } from "react-router-dom";
import "../styles/ItemDetailContainer.css";

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

  return book ? (
    <div className="item-detail-container">
      <div className="item-detail">
        <img src={book.image} alt={book.title} className="detail-image" />
        <div className="detail-text">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Price:</strong> ${book.price.toLocaleString()}</p>
          <p><strong>Synopsis:</strong> {book.synopsis}</p>
          <p><strong>Reviews:</strong> ⭐ {book.reviews}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default ItemDetailContainer;

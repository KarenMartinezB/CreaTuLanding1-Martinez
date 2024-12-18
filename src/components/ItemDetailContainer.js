import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useParams } from "react-router-dom";

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
    <div className="detail-container">
      <img src={book.image} alt={book.title} />
      <div className="details">
        <h2>{book.title}</h2>
        <p>{book.synopsis}</p>
        <p>Price: ${book.price}</p>
        <p>Reviews: ⭐ {book.reviews}</p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default ItemDetailContainer;

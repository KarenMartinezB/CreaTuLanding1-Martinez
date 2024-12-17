import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const querySnapshot = await getDocs(collection(db, "books"));
      const booksData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Best Sellers</h1>
      <ItemList items={books} />
    </div>
  );
}

export default Home;

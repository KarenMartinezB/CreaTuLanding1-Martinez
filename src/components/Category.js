import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function Category() {
  const { id } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const q = query(collection(db, "books"), where("category", "==", id));
      const querySnapshot = await getDocs(q);
      const booksData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(booksData);
    };

    fetchCategory();
  }, [id]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">{id} Books</h1>
      <ItemList items={books} />
    </div>
  );
}

export default Category;

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";
import "../styles/Home.css";

function Home() {
  const [bestSellers, setBestSellers] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksCollection = collection(db, "books");

      // Fetch Best Sellers
      const bestSellersQuery = query(booksCollection, where("isBestSeller", "==", true));
      const bestSellersSnapshot = await getDocs(bestSellersQuery);
      setBestSellers(bestSellersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      // Fetch All Books
      const allBooksSnapshot = await getDocs(booksCollection);
      setAllBooks(allBooksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Best Sellers</h1>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {bestSellers.map((book, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={book.id}>
              <img src={book.image} className="d-block w-100" alt={book.title} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{book.title}</h5>
                <p>{book.synopsis}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h1 className="mt-5">All Books</h1>
      <ItemList items={allBooks} />
    </div>
  );
}

export default Home;
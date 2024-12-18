import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";
import "../styles/Home.css";

function Home() {
  const [bestSellers, setBestSellers] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log("Fetching books...");
        const booksCollection = collection(db, "books");

        // Obtener todos los libros
        const allBooksSnapshot = await getDocs(booksCollection);
        const allBooksData = allBooksSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("All Books Data:", allBooksData); 
        setAllBooks(allBooksData);

        // Obtener Best Sellers
        const bestSellersQuery = query(booksCollection, where("isBestSeller", "==", true));
        const bestSellersSnapshot = await getDocs(bestSellersQuery);
        const bestSellersData = bestSellersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Best Sellers Data:", bestSellersData); 
        setBestSellers(bestSellersData);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again later.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mt-4">
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
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
          </div>

          <h1 className="mt-5">All Books</h1>
          {allBooks.length > 0 ? (
            <ItemList items={allBooks} />
          ) : (
            <p>No books available. Please check Firestore data.</p>
          )}
        </>
      )}
    </div>
  );
}

export default Home;

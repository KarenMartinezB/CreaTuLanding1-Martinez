import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "books"));
      const books = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(books);
      setLoading(false);
    };

    fetchItems();
  }, []);

  return loading ? <p>Cargando...</p> : <ItemList items={items} />;
};

export default ItemListContainer;

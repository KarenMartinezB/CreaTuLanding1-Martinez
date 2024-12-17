import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "books", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      }
      setLoading(false);
    };

    fetchItem();
  }, [id]);

  return loading ? <p>Cargando...</p> : (
    <div>
      <h2>{item.title}</h2>
      <p>{item.author}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default ItemDetailContainer;

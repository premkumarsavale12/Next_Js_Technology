"use client";

import { useEffect, useState } from "react";
import "./api.css";

export default function Api() {
  const [product, setProduct] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const filtered = product.filter((item) =>
    item.title.toLowerCase().includes(searchInput)
  );

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProduct(data.products);
    };
    getData();
  }, []);

  return (
    <>
      <h1>This is API Calling Using NEXT JS</h1>

      <input
        type="search"
        placeholder="Search by title"
        value={searchInput}
        onChange={handleChange}
      />

      {filtered.map((item) => (
        <div key={item.id} className="crd">
          <h1>Id: {item.id}</h1>
          <h2>Title: {item.title}</h2>
          <h3>Price: ₹{item.price}</h3>
          <h3>Brand: {item.brand}</h3>
          <h4>Category: {item.category}</h4>
          <h4>Rating: {item.rating}</h4>
          <h3>Stock: {item.stock}</h3>
        </div>
      ))}
    </>
  );
}

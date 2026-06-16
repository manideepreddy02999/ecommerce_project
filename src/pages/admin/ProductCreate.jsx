import React from "react";
import { useState } from "react";
import "./ProductCreate.css";
import axios from "axios";
const ProductCreate = () => {
  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    productPrice: 0,
    category: "",
    productImageUrl: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);

    const API_URL = "http://localhost:3001/products";

    axios
      .post(API_URL, product)
      .then((response) => {
        console.log("Product created successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  };
  return (
    <div className="product-create-container">
      <h2>Create Product</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          id="productName"
          placeholder="Product Name"
          onChange={(e) =>
            setProduct({ ...product, productName: e.target.value })
          }
        />
        <label htmlFor="productDescription">Product Description</label>
        <input
          type="text"
          id="productDescription"
          placeholder="Product Description"
          onChange={(e) =>
            setProduct({ ...product, productDescription: e.target.value })
          }
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        >
          <option value="mens">Mens</option>
          <option value="womens">Womens</option>
          <option value="kids">Kids</option>
          <option value="home">Home</option>
          <option value="beauty">Beauty</option>
          <option value="genz">GenZ</option>
        </select>
        <input
          type="number"
          placeholder="Product Price"
          onChange={(e) =>
            setProduct({ ...product, productPrice: parseFloat(e.target.value) })
          }
        />

        <input
          type="url"
          placeholder="Product Image URL"
          onChange={(e) =>
            setProduct({ ...product, productImageUrl: e.target.value })
          }
        />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductCreate;

// import kids,genz and all sections

import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice.jsx";

const MensProducts = () => {
  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    console.log("Added to cart:", item);
  };

  const dispatch = useDispatch();

  const [mensData, setMensData] = React.useState([]);

  const API_URL = "http://localhost:3001/products";
  const fetchMensData = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setMensData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mens data:", error);
      });
  };

  useEffect(() => {
    fetchMensData();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {" "}
      MensProducts
      <div className="mens-container">
        {mensData.map((item) => {
          return (
            <div className="mens-item" key={item.id}>
              <h3>{item.productName}</h3>
              <div className="mens-image">
                <img src={item.productImageUrl} />
              </div>
              <button onClick={() => addToCartHandler(item)}>
                Add to Cart
              </button>
              <button onClick={() => navigate(`/cart`)}>View Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MensProducts;

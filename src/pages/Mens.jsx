import React, { useState, useEffect } from "react";
import "../styles/Mens.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Mens = () => {
  const [mensData, setMensData] = useState([]);
  const navigate = useNavigate();
  const API_URL = "http://localhost:3001/mens";

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

  return (
    <div className="mens-container">
      {mensData.map((item) => {
        return (
          <div className="mens-item" key={item.id} style={{ cursor: "pointer" }} onClick={() => navigate("/mensproducts")}>
            {/* <h3>{item.category}</h3> */}
            <div className="mens-image">
              <img src={item.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Mens;

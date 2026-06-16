import React, { useState, useEffect } from "react";
import "../styles/Women.css";
import axios from "axios";

const Women = () => {
  const [womenData, setWomenData] = useState([]);

  const API_URL = "http://localhost:3001/womens";

  const fetchWomenData = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setWomenData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching women data:", error);
      });
  };

  useEffect(() => {
    fetchWomenData();
  }, []);

  return (
    <div className="women-container">
      {womenData.map((item) => {
        return (
          <div className="women-item" key={item.id}>
            {/* <h3>{item.category}</h3> */}
            <div className="women-image">
              <img src={item.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Women;
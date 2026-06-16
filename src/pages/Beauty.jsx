import React, { useState, useEffect } from "react";
import "../styles/Beauty.css";
import axios from "axios";

const Beauty = () => {
  const [beautyData, setBeautyData] = useState([]);

  const API_URL = "http://localhost:3001/beauty";

  const fetchBeautyData = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setBeautyData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching beauty data:", error);
      });
  };

  useEffect(() => {
    fetchBeautyData();
  }, []);

  return (
    <div className="beauty-container">
      {beautyData.map((item) => {
        return (
          <div className="beauty-item" key={item.id}>
            {/* <h3>{item.category}</h3> */}
            <div className="beauty-image">
              <img src={item.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Beauty;
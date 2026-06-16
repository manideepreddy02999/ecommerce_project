import React, { useState, useEffect } from "react";
import "../styles/Kids.css";
import axios from "axios";

const Kids = () => {
  const [kidsData, setKidsData] = useState([]);

  const API_URL = "http://localhost:3001/kids";

  const fetchKidsData = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setKidsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching kids data:", error);
      });
  };

  useEffect(() => {
    fetchKidsData();
  }, []);

  return (
    <div className="kids-container">
      {kidsData.map((item) => {
        return (
          <div className="kids-item" key={item.id}>
            {/* <h3>{item.category}</h3> */}
            <div className="kids-image">
              <img src={item.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Kids;
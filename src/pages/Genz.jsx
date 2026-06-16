import React, { useState, useEffect } from "react";
import "../styles/Genz.css";
import axios from "axios";

const Genz = () => {
  const [genzData, setGenzData] = useState([]);

  const API_URL = "http://localhost:3001/genz";

  const fetchGenzData = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setGenzData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching genz data:", error);
      });
  };

  useEffect(() => {
    fetchGenzData();
  }, []);

  return (
    <div className="genz-container">
      {genzData.map((item) => {
        return (
          <div className="genz-item" key={item.id}>
            {/* <h3>{item.category}</h3> */}
            <div className="genz-image">
              <img src={item.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Genz;
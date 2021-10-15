import React, { useState, useEffect } from "react";
import "./App.css";

const Card = ({ listing, onClick }) => {
  const [list, setList] = useState([]);
  const [play, setPlay] = useState(null);
  console.log("hehe", listing);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 5,
      }}
    >
      {listing.map((obj, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: "white",
            height: 300,
            width: 150,
            margin: 5,
            // padding: "10px 0px",
            borderRadius: 15,
            transform: play === idx ? "translateY(-10px)" : "",
            transition: "transform 250ms",
          }}
          onClick={() => (onClick ? onClick(obj) : null)}
          onMouseEnter={() => setPlay(idx)}
          onMouseLeave={() => setPlay(null)}
        >
          <img
            src={obj.picture.large}
            style={{ borderRadius: "10px 10px 0px 0px", width: "100%" }}
          />
          <div style={{ overflowWrap: "break-word", padding: 10 }}>
            <div>{`${obj.name.first} ${obj.name.last}`}</div>
            <div>{`${obj.email}`}</div>
            <div>{`${obj.phone}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

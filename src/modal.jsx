import React, { useState, useEffect } from "react";
import "./App.css";

const Modal = ({ open, onClose, item }) => {
  const [list, setList] = useState([]);
  return (
    <React.Fragment>
      {open && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            backgroundColor: "#00000036",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: 350,
              height: 270,
              position: "relative",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <button
              style={{ position: "absolute", right: 0, top: 0 }}
              onClick={onClose}
            >
              X
            </button>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ flex: 1 }}>
                <img src={item.picture.large} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <div>First Name : {item.name.first}</div>
                  <div>Last Name : {item.name.last}</div>
                  <div>Age : {item.dob.age}</div>
                  <div>Phone : {item.phone}</div>
                  <div>Email : {item.email}</div>
                  <div>Country : {item.location.country}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;

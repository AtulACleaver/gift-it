import React from "react";
import "../css/Main.css";
import "../css/Container.css";

function Container() {
  return (
    <div className="app-container">
      <div className="heading">
        <h1 className="heading-text">List your Gifts!</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-innercard">
            <div className="card-greetings">Hey Atul!</div>
            <div className="card-button-container">
              <button className="card-button">Add a Gift</button>
            </div>
          </div>
          <div className="card-table">
           
        </div>
        </div>
      </div>
    </div>
  );
}

export default Container;

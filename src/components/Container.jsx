import React, { useState } from "react";
import "../css/Main.css";
import "../css/Container.css";
import Popup from "./Popup.jsx";

function Container(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

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
              <button
                className="card-button"
                onClick={() => setButtonPopup(true)}
              >
                Add a Gift
              </button>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className="popup-content">
                  <h1 className="popup-content-heading">
                    Add a Gift to your List 
                  </h1>
                  <div className="popup-content-input">
                    <p className="input-label">Gift Name:</p>
                    <input
                      className="popup-content-input-field"
                      type="text"
                      placeholder="Name"
                    />
                    <p className="input-label">Amazon Link:</p>
                    <input
                      className="popup-content-input-field"
                      type="url"
                      placeholder="URL"
                    />
                    <p className="input-label">Ideal Price:</p>
                    <input
                      className="popup-content-input-field price"
                      type="number"
                      placeholder="Price when you want to be alerted"
                    />
                    <button
                      className="popup-content-submit"
                      onClick={() => setButtonPopup(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Popup>
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

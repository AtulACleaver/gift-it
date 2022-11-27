import React, { useState } from "react";
import "../css/Main.css";
import "../css/Container.css";
import Popup from "./Popup.jsx";
import { nanoid } from "nanoid";
import data from "../data.json";
import "../css/Table.css";

function Container() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const [tableData, setTableData] = useState(data);
  const [addFormData, setAddFormData] = useState({
    id: "",
    name: "",
    url: "",
    idealPrice: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newGift = {
      id: nanoid(),
      name: addFormData.name,
      url: addFormData.url,
      idealPrice: addFormData.idealPrice,
    };

    const newGifts = [...tableData, newGift];
    setTableData(newGifts);
  };

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
                  <form
                    onSubmit= {handleAddFormSubmit}
                  >
                    <div className="popup-content-input">
                      <p className="input-label">Gift Name:</p>
                      <input
                        className="popup-content-input-field"
                        type="text"
                        name="name"
                        required="required"
                        placeholder="Name"
                        onChange={handleAddFormChange}
                      />
                      <p className="input-label">Amazon Link:</p>
                      <input
                        className="popup-content-input-field"
                        type="url"
                        name="url"
                        required="required"
                        placeholder="URL"
                        onChange={handleAddFormChange}
                      />
                      <p className="input-label">Ideal Price:</p>
                      <input
                        className="popup-content-input-field price"
                        type="number"
                        name="idealPrice"
                        required="required"
                        placeholder="Price when you want to be alerted"
                        onChange={handleAddFormChange}
                      />
                      <button type="submit" className="popup-content-submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Popup>
            </div>
          </div>
          <div className="card-table">
            <div class="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th className="table-name" scope="col">
                      Gift Name
                    </th>
                    <th className="table-price" scope="col">
                      Ideal Price
                    </th>
                    <th className="table-link" scope="col">
                      Amazon Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <tr>
                      <td>{item.name}</td>
                      <td className="table-row-price">{item.idealPrice}</td>
                      <td className="table-row-link">
                        <button className="table-link-button">
                          <a href={item.url} className="table-link-button-link">
                            Buy Now
                          </a>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;

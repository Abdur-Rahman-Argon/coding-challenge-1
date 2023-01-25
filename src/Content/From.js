import React, { useState } from "react";

const From = () => {
  const [name, setName] = useState("" || "");
  const [terms, setTerms] = useState(true || false);

  const fromSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      terms: terms,
    };

    console.log(data, name);
  };

  return (
    <div className="from-container">
      <div>
        <h1 className="from-heading">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h1>
      </div>

      <form onSubmit={fromSubmit}>
        <div className="from-area">
          <div className="input-row">
            <label className="input-label">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-row">
            <input
              type="checkbox"
              onClick={() => setTerms(!terms)}
              className="input-checkbox"
              checked={terms}
            />
            <label className="input-label">Agree to terms</label>
          </div>

          <div className="input-row">
            <input
              disabled={!terms}
              type="submit"
              value="Save"
              className=" submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default From;

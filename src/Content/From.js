import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const From = () => {
  const data = [
    { name: "Option1", id: 1 },
    { name: "Option", id: 2 },
  ];
  const [options, setOptions] = useState(data || []);
  const [userData, setUserData] = useState({});
  const [name, setName] = useState(userData.name || "");
  const [terms, setTerms] = useState(userData.terms || false);
  const [sectors, setSectors] = useState(userData.sectors || []);

  const fromSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      terms: terms,
      sectors: sectors,
    };
    setUserData(data);
    console.log(data, name, userData);
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
              required
            />
          </div>

          <div className="input-row">
            <label className="input-label"> Sectors:</label>
            <Multiselect
              options={options}
              selectedValues={sectors}
              onSelect={(e) => setSectors(e)}
              onRemove={(e) => setSectors(e)}
              displayValue="name"
              style={{
                searchBox: {
                  fontSize: "15px",
                  borderRadius: "5px",
                  border: "2px solid gray",
                  width: "200px",
                  padding: " 4px",
                  backgroundColor: " white",
                },
              }}
            />
          </div>

          <div className="input-row">
            <input
              type="checkbox"
              onClick={() => setTerms(!terms)}
              className="input-checkbox"
              checked={terms}
              required
            />
            <label className="input-label">Agree to terms</label>
          </div>

          <div className="input-row">
            <input
              disabled={sectors.length < 1}
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

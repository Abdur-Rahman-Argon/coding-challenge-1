import React, { useEffect, useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const From = () => {
  const [insertedId, setInsertedId] = useState();
  const [options, setOptions] = useState([]);
  const [userData, setUserData] = useState({});

  // select option get from data base
  useEffect(() => {
    fetch("http://localhost:5000/sectors")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);

  // select option get from data base
  useEffect(() => {
    // fetch(`http://localhost:5000/get-user/${insertedId}`)
    fetch("http://localhost:5000/user-data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slice(-1)[0]);
        setUserData(data.slice(-1)[0]);
      });
  }, []);

  const [name, setName] = useState(userData.name || "");
  const [terms, setTerms] = useState(userData.terms || false);
  const [sectors, setSectors] = useState(userData.sectors);

  // from submit
  const fromSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      terms: terms,
      sectors: sectors,
    };

    // user data post on data base
    fetch("http://localhost:5000/create-user-data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          setInsertedId(result.insertedId);
        }
      });
    setUserData(data);
  };

  return (
    <div className="from-container">
      <div>
        <h1 className="from-heading">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h1>
      </div>

      {/*  */}
      <form onSubmit={fromSubmit}>
        <div className="from-area">
          <div className="input-row">
            <label className="input-label">Name:</label>
            <input
              type="text"
              name="name"
              value={" " && (name || userData.name)}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
            />
          </div>

          {/* multiple select items */}
          <div className="input-row">
            <label className="input-label"> Sectors:</label>
            <Multiselect
              options={options}
              selectedValues={sectors || userData.sectors}
              onSelect={(e) => setSectors(e)}
              onRemove={(e) => setSectors(e)}
              displayValue="name"
              selectionLimit={5}
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

          {/* terms check */}
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

          {/* submit button */}
          <div className="input-row">
            <input
              disabled={sectors?.length < 1}
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

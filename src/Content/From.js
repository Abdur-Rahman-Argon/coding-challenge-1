import React, { useEffect, useState } from "react";

const From = () => {
  const [insertedId, setInsertedId] = useState();
  const [options, setOptions] = useState([]);
  const [userData, setUserData] = useState({});
  const [name, setName] = useState(userData.name || "");
  const [terms, setTerms] = useState(userData.terms || false);
  const [sectors, setSectors] = useState(userData.sectors);

  // select option get from data base
  useEffect(() => {
    fetch("https://coding-challange-server.onrender.com/sectors")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
        console.log(data);
      });
  }, []);

  const fromSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      terms: terms,
      sectors: sectors,
    };
    // user data post on data base
    fetch("https://coding-challange-server.onrender.com/create-user-data", {
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
    console.log(data);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <div className="input-row">
            <label className="input-label">Sectors:</label>

            <select
              className="input-select"
              value={sectors}
              onChange={(e) => setSectors(e.target.value)}
            >
              {options?.map((s) => (
                <option
                  className={` ${s.group ? "group-option" : "option"} `}
                  title={s.name}
                  value={s.name}
                  key={s.name}
                  id={s.name}
                  disabled={s.group}
                >
                  {s.name}
                </option>
              ))}
            </select>
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
              disabled={!sectors}
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

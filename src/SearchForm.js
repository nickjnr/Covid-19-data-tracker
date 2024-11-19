import React, { useState, useEffect } from "react";
 import background from "./images/eaflag.png";
import axios from "axios";

function SearchForm() {
  const [info, setInfo] = useState({});
  const [country, setCountry] = useState("");
  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  const sendRequest = async () => {
    await axios
      .get(`https://disease.sh/v3/covid-19/countries/${country}`)
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          alert("country not find, enter again");
        }
        console.log(err);
      });
    setCountry("");
  };

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries/usa")
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ color: "#39395f", marginTop: "2px", marginBottom: "2px" }}>
          enter country name to get data
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <input
          style={{
            border: "2px solid #39395f",
            marginRight: "3px",
            borderRadius: "50px",
          }}
          value={country}
          onChange={handleChange}
        />
        <button
          style={{
            border: "2px solid #39395f",
            borderRadius: "20px",
            backgroundColor: "rgb(245, 238, 194)",
          }}
        >
          <i
            className="fa fa-search"
            aria-hidden="true"
            style={{ color: "#39395f" }}
            onClick={sendRequest}
          ></i>
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="card"
      >
        <h3>COUNRY: {info.country}</h3>
        <div>
          <img
            src={background}
            alt="not loaded"
            style={{ height: "50px", width: "100%" }}
          ></img>
        </div>
        <h3>total cases:{info.cases}</h3>
        <h3>total deaths :{info.deaths}</h3>
        <h3>total recovered:{info.recovered}</h3>
        <h3>active cases:{info.active}</h3>
      </div>
    </div>
  );
}

export default SearchForm;

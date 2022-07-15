import requestOptions from "../services/requestOptions.js";
import { React, useState } from "react";

function Header() {
  const [find, setFind] = useState("");
  function concatSearch() {
    fetch(link, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  let userSearch;
  const baseLink = "https://www.googleapis.com/books/v1/volumes?q=";
  let link = baseLink + userSearch;

  function HandleChange(event: any) {
    const e = event.target.value;
    setFind(e);
    return e;
  }

  return (
    <div>
      <h1 className="center">The Art Institute of Chicago</h1>

      <div className="center">
        <input onChange={HandleChange} placeholder="Enter your search here" />
      </div>
      <div className="center">
        <div className="button">
          <button onClick={concatSearch} type="button" className="button">
            Search
          </button>
        </div>
        <button onClick={lucky} className="button" type="button">
          Randomize it !
        </button>
      </div>
      <br></br>
    </div>
  );
}

export default Header;

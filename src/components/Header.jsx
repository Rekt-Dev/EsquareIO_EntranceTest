import requestOptions from "../services/requestOptions.js";
import { React, useState } from "react";

export function Header() {
  const [find, setFind] = useState("");
  const [searchAnswer, setSearchAnswer ] = useState([]);

  function concatSearch() {
    let data1
  
    fetch(link, requestOptions)
      .then((response) => response.json())
      .then((data)=>console.log(data))
      .then((data)=> data1=data)
      .then (console.log(data1))
      .then ((data) => setSearchAnswer(data))
      .then((data)=>console.log(data))

    }
    
  const baseLink = "https://www.googleapis.com/books/v1/volumes?q=";
  let link = baseLink + find;

  function HandleChange(event) {
    const e = event.target.value;
    setFind(e);
    return e;
  }

  return (
    <div>
      <h1 className="centered">Google Books Seacrh App</h1>
      <div className="centered">

        <input onChange={HandleChange} placeholder="Enter your search here" />
        <br />
        <br />

      </div>
      <div className="centered">
        <div className="button">
          <button onClick={concatSearch} type="button" className="center">
            Search
          </button>
        </div>
      </div>
      <br></br>
    </div>
  );
}


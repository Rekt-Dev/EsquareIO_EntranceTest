import React, { useEffect, useState } from "react";
import "./App.css";
import { Main } from "./components/Main";

const App = () => {
  const [userSearchQuery, setuserSearchQuery] = useState();
  const [loading, setLoading] = useState(false);
  async function getData() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${usersSearchQuery}'
+${userSearchQuery}`
      );
      setuserSearchQuery(await response.json());
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <div className="">
      <input className="" placeholder="Enter Your Search Here..."></input>
      <br />
      <button className="">SEARCH</button>
      <div className="center">
        <Main />
      </div>
    </div>
  );
};

export default App;

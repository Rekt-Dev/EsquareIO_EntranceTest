import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/Card";
import { Main } from "./components/Main";
const App = () => {
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(false);
  async function getData() {
    let usersSearchQuery = "";
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=search+terms
+${usersSearchQuery}`
      );
      setTodos(await response.json());
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

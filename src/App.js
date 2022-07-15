import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/Card";
const App = () => {
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(false);
  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
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
    <div className="App">
      <input placeholder="Enter Your Search Here..."></input>
      <br />
      <button>SEARCH</button>
      <Card />
    </div>
  );
};

export default App;

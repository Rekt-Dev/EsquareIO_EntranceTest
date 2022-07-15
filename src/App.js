import React, { useEffect, useState } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Header } from "./components/Header";

export const App = () => {
  const [userSearchQuery, setUserSearchQuery] = useState("");
  const [rcvdData, setRcvdData] = useState([]);

  async function getData() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${userSearchQuery}`
      );
      await response.json();
    } catch (e) {
      console.log(e);
    } finally {
      setRcvdData(["hey"]);
    }
  }

  useEffect(() => {
    setRcvdData(["last time", "it is the lastest time"]);
    getData();
  }, []);

  return (
    <div>
      <div className="">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;

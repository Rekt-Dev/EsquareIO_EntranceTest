import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import { GoToAuthor } from "./components/GoToAuthor";
import { OpenCard } from "./components/OpenCard";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="gotoauthor" element={<GoToAuthor />} />
      <Route path="opencard" element={<OpenCard />} />
    </Routes>
  </BrowserRouter>
);

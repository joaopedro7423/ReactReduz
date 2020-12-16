import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Routes from "./routes";
import Header from "./components/Header/index";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

import React from "react";

import "./App.css";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Page />
      <footer className="footer">Я подвал</footer>
    </div>
  );
}

export default App;

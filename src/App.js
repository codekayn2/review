import React from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Page />
      <Footer/>
    </div>
  );
}

export default App;

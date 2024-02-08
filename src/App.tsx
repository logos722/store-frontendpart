import React from "react";
import "./scss/index.scss";
import {} from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavList from "./components/NavList";

function App() {
  return (
    <div>
      <Header />
      <NavList />
      <Footer />
    </div>
  );
}

export default App;

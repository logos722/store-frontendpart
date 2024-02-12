import React from "react";
import "./scss/index.scss";
import {} from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavList from "./components/NavList";
import MainAdvertise from "./components/MainAdvertise";

function App() {
  return (
    <div>
      <Header />
      <NavList />
      <MainAdvertise />
      <Footer />
    </div>
  );
}

export default App;

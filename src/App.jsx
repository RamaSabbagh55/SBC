import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./component/Header";
import Eservise from "./pages/Eservices";
function App() {
  return (
    <div className="relative z-10">
      <Header className="bg-white" />
      <Home />
      <About />
      <Eservise />
      </div>

  );
} 

export default App;

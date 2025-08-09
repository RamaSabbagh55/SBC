
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./component/Header";
import Eservise from "./pages/Eservices";
import FAQ from "./pages/FAQ";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="relative z-10">
      <Header/>
      <Home />
      <About />
      <Eservise />
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;

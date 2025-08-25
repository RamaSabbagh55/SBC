
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Eservise from "./pages/Eservices";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"
import Our from "./pages/Our";
import FAQComponent from "./components/FAQComponent"
import Count from"./pages/Count"

function App() {
  return (
    <div >
      <Sidebar/>
      <Header/>
      <Home />
      <About />
      <Eservise />
      <FAQ/>
      <Our/>
      <Count/>
      <Footer/>
    </div>
  );
}

export default App;

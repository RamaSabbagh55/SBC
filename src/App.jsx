// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "./App.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Header from "./component/Header";
// import Eservise from "./pages/Eservices";
// // import {byPrefixAndName.fas} from
// import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
// function App() {
//   return (
//     <div className="relative z-10">
//       <Header className="bg-white" />

// <h1><FontAwesomeIcon icon={faMoneyBill} />

// </h1>      <Home />
//       <About />
//       <Eservise />
//       </div>

//   );
// } 

// export default App;
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

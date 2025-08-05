import React from "react";

export default  function Htext({ title }){
  return ( 
    <h2 className="flex justify-center  text-3xl font-bold text-green-900 mb-20  "
     style={{ color: "var( --primaryColor--)" }}>
      {title} 
    </h2>);
}
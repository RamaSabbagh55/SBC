import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EsevicesCompoonent({ icon, text }) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-3 text-center w-70 h-50 transition-all duration-300 hover:shadow-xl  hover:scale-105 ">
      {/* <FontAwesomeIcon
        icon={icon}
        style={{ color: "var(--primaryColor--)" }}
        className=" mt-6 text-5xl"
      /> */}
      <div className=" flex justify-center items-center">
        <img src={icon} alt="goal icon" className="w-25 h-25" />
      </div>
      <h3
        className=" mt-6 text-lg font-semibold  mt-6"
        style={{ color: "var(--primaryColor--)" }}
      >
        {text}
      </h3>
    </div>
  );
}

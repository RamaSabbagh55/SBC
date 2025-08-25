import React from "react";

import { motion as Motion } from "motion/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OurComp({ icon, text }) {
  return (
    <Motion.div
      className="bg-white rounded-3xl shadow-md p-10 text-center w-70 h-80 transition-all duration-300 hover:shadow-xl  hover:scale-105 "
      initial={{ y: 50, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}//حركه لا نهائية
    >
      <div className=" flex justify-center items-center">
        <img src={icon} alt="goal icon" className="w-25 h-25" />
      </div>
      <h3
        className=" mt-6 text-lg font-semibold  mt-6"
        style={{ color: "var(--primaryColor--)" }}
      >
        {text}
      </h3>
    </Motion.div>
  );
}

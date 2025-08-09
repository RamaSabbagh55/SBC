import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function EsevicesCompoonent({ icon, text }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-3 text-center w-70 h-50 transition-all duration-300 hover:shadow-lg   hover:bg-gray-100 "  >
      <FontAwesomeIcon
        icon={icon}
        style={{ color: "var(--primaryColor--)" }}
        className=" mt-6 text-5xl"
      />
      <h3
        className=" mt-6 text-lg font-semibold  mt-6
"
        style={{ color: "var(--primaryColor--)" }}
      >
        {text}
      </h3>
    </div>
  );
}

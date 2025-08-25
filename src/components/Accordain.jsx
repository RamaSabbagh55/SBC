import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Accordain = ({ title, answer }) => {
  const [accordainOpen, setAccordainOpen] = useState(false);
  return (
    <div className=" py-5">
      <button
        onClick={() => setAccordainOpen(!accordainOpen)}
        className="flex justify-between  w-full cursor-pointer"
      >
        <span style={{ color: "var(--primaryColor--)" }}>{title}</span>
        {accordainOpen ? <span style={{ color: "var(--primaryColor--)" }}> <FontAwesomeIcon icon={faChevronUp}/> </span> : <span style={{ color: "var(--primaryColor--)" }}> <FontAwesomeIcon icon={faChevronDown}/> </span>}

      </button>

    {/* we have to use backticks ` eith dynamic value in use state */}
      <div
        className={`grid overflow-hidden  transition-all duration-300 ease-in-out text-md ${
          accordainOpen
            ? "grid-rows-[1fr] opacity-20 "
            : "grid-rows-[0fr] opacity-0 "//fraction وحدة قياس مساحة 
        }`}
      >
        <div className="overflow-hidden mt-2 ">{answer} 
        </div>
      </div>
    </div>
    


  );
};

export default Accordain;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion as Motion } from "motion/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EsevicesCompoonent({ icon, text,text2 }) {
  return (
    <Motion.div
      className="bg-white flex flex-col items-center gap-7 rounded-3xl shadow-md p-3 text-centertransition-all duration-300 hover:shadow-xl  hover:scale-105 "
      initial={{ y: 50, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}//حركه لا نهائية
    >
      <div className=" flex justify-center  items-center">
        <img src={icon} alt="goal icon" className="w-34 h-34" />
      </div>
      <h3
        className="  text-xl font-semibold font-thamanyahTextMeduim "
        style={{ color: "var(--primaryColor--)" }}
      >
        {text}
      </h3>
      <h5
        className="  text-sm text-center text-gray-500 max-w-[280px] font-thamanyahTextMeduim "
        
      >
        {text2}
      </h5>
      <button className="cursor-pointer">
      <div className=" flex  flex-col justify-center items-center rounded-full bg-blue-100 h-15 w-15  mb-5" >
        <FontAwesomeIcon icon={faArrowRight}  className="hover:scale-150 transition-opacity ease-in-out text-xl"  color="#2B67EF"></FontAwesomeIcon>
      </div>
      </button>
    </Motion.div>
  );
}

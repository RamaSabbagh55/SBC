import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function AboutComponent({icon, h1, p1, p2}){
    return(
               <div className="flex flex-col items-center ">
                  <div
                    className="w-22 h-22 rounded-full flex items-center justify-center  mb-5"
                    style={{ backgroundColor: "var(--bgCircle--)" }}
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      bounce
                      className="text-4xl"
                      style={{ color: "var(--primaryColor--)" }}
                    />
                  </div>
                  <h2
                    className="text-md font-black text-xl text-center  mb-5"
                    style={{ color: "var(--primaryColor--)" }}
                  >
                    {h1}  
                  </h2>
                  <h4  className="text-md font-bold text-md text-center "
                    style={{ color: "var(--secandaryColor--)" }}>{p1} </h4>
                    <h5   className="text-md font-bold text-md text-center "
                    style={{ color: "var(--secandaryColor--)"}}>{p2} </h5>
                </div>
    )
}
import React from "react";
export default function FAQComponent( {question, answer}){
return(
    <div className='p-2 w-300 h-20  border-2 border-blue-900 rounded-lg justify-center items-center ml-7  transition-all duration-300   hover:shadow-xl  hover:bg-gray-100'>
      <div  dir="rtl"  className="mb-6 flex text-right flex-col   ">
        <h2 className="text-lg  text-right font-semibold mb-2" style={{color:"var(--primaryColor--)"}}>{question} </h2>
        <p  style={{color:"var(--secandaryColor--)"}}> {answer}</p>
      </div>
</div>
)
}
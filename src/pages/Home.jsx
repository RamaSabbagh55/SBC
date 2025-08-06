import React from "react"
  // import bg from "../assets/SBCbg.jpg"
import bg from "../assets/bgSBCBlue.png"
import Header from '../component/Header'
// .. comeback to pages folder  

 export default function Home(){
  return (


<div
  id="الرئيسية"
  className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white  "
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className=" mt-20 space-y-7">
  <h2 className="text-4xl font-bold ">المركز السعودي للأعمال</h2>
  <div className="space-y-1">
  <h3 className="text-2xl max-w-3xl text-gray-300">
مركز يُعنى بتيسير إجراءات بدء الأعمال الاقتصادية، ومزاولتها، وإنهائها 
  </h3>
    <h3 className="text-2xl max-w-3xl text-gray-300">
وتقديم جميع الخدمات ذات
 الصلة؛ وفقًا لأفضل الممارسات الدولية

  </h3>
  </div>
  </div>
</div>
  
  )
  }
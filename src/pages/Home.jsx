import React from "react"
  import bg from "../assets/SBCbg.jpg"
// import bg from "../assets/Riyadh1.avif"

import Header from '../component/Header'
// .. comeback to pages folder  

 export default function Home(){
  return (



  <div id="#الرئيسية" className="relative min-h-screen overflow-hidden">
  {/* الخلفية */}
  <div className="absolute inset-0">
    <div
      className="h-full w-full bg-cover bg-center contrast-40 blur-xs
"
      style={{ backgroundImage: `url(${bg})` }}
     
    />
    <div className="absolute z-20 top-2/4 right-1/5 translate-x-1/2 -translate-y-1/2 text-white text-center space-y-6">
        <h2 className="text-4xl font-bold">المركز السعودي للأعمال</h2>
        <h3 className="text-right mr-80 text-2xl "  > منصة موحدة توفر مكانًا واحدًا لجميع خدمات تأسيس و إدارة أعمالك التجارية</h3>
   
      </div>
  </div>


</div>
  )
  }
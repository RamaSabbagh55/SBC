import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp,faXTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
     const currentYear = new Date().getFullYear();// current date
  return (
    <footer className=" text-white py-5 px-12" style={{background:"var(--primaryColor--)", color:"var(--textColor--)"}}>
      <div className="  flex flex-row justify-between items-center text-xs">
      
      
        <div className="space-x-4">
<div className="flex space-x-6 text-xl items-center ">
          <a href="https://www.linkedin.com/company/bcgovsa/?originalSubdomain=sa" target="_blank" >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=00966112822881&text&type=phone_number&app_absent=0" >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://x.com/BCgov_Care" target="_blank" >
          <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.youtube.com/channel/UC1mSbR2yfVqz6nn5sSBYa9g" target="_blank" >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.instagram.com/bcgovsa/" target="_blank" >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        </div>
              <div dir="RTL" className="flex space-x-5  text-sm">
          <a href="#الرئيسية" className=" transition">الرئيسية</a>
          <a href="#عن المركز " className=" transition">عن المركز</a>
          <a href="#الخدمات " className=" transition">الخدمات الإلكترونية </a>
          <a href="#الأسئلة الشائعة" className=" transition">الأسئلة الشائعة  </a>

        </div>

     

             <p className="text-sm">المركز السعودي للأعمال جميع الحقوق    
            <p className="text-sm text-center"> &copy;  {currentYear}   محفوظة</p>
        </p>
  
      </div>
    </footer>
  );
}



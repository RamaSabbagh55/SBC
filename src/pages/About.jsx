// import ab from "../assets/sbc-color-logo.png";
import { motion as Motion } from "motion/react";
import Htext from "../components/HText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLifeRing,
  faLightbulb,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import AboutComponent from "../components/AboutComponent";

export default function About() {
  return (
    <div
      id="عن المركز"
      className=" flex justify-center items-center flex-col bg-blue-50 min-h-screen  "
     
    >
      {/* <div className=" flex flex-col  justify-center items-center  ">  */}
      {/* // focus  */}
      
      <Motion.div  
        initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }} > 
  {/*  false in  once means  the animation will repeat every scroll  */}
        <Htext title="  عن المركز السعودي للأعمال" className="mb-28" />
       
      </Motion.div>
   
      {/* </div> */}
      <div className="flex md:flex-row md:space-x-18 flex-col space-y-8  font-thamanyahTextMeduim">

          <AboutComponent
          icon={faGlobe}
          h1="نبذة"
          p1=" تقديم نموذج خدمات يعزز القدرة التنافسية "
          p2="   وخلق بيئة أعمال جذابة   "
        /> 
        <AboutComponent
          icon={faLifeRing}
          h1="الهدف"
          p1="المساعدة في اتخاذ القرارات بناء على دراسة ومعالجة البيانات."
          p2="تسهيل بدء وممارسة الأعمال الاقتصادية "


        />

        <AboutComponent
          icon={faLightbulb}
          h1="الرؤية"
          p1=" أن تصبح المملكة العربية السعودية من"
          p2="الدول العشرة الرائدة في العالم "
        />

        <AboutComponent
          icon={faEnvelope}
          h1="الرسالة"
          p1=" تقديم نموذج خدمات يعزز القدرة التنافسية "
          p2="   وخلق بيئة أعمال جذابة   "
        />

        
      </div>
    </div>
  );
}

// import ab from "../assets/sbc-color-logo.png";
import Htext from "../component/HText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLifeRing,
  faLightbulb,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <div
      id="عن المركز"

      className=" flex justify-center items-center flex-col  h-screen  "
      style={{ color: "var(--primaryColor--)" }}
    >
      <div className=" flex flex-col justify-center items-center  ">
        <div>
        <Htext title=" عن المركز" />
        <h4
          className=" text-xl  "
          style={{ color: "var(--secandaryColor--)" }}
        >
          نُمكّن الأعمال من الانطلاق والنمو بسرعة وكفاءة أكبر من خلال تقديم
          خدمات متكاملة لتأسيس وممارسة وإنهاء الأعمال
        </h4></div>
        <h4
          className=" text-xl  mb-20 "
          style={{ color: "var(--secandaryColor--)" }}
        >
          {" "}
          وفق أفضل المعايير الدولية وتحت إشراف موحد
        </h4>
      </div>
      <div className=" flex space-x-10  ">
    

        <div className="flex flex-col items-center ">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center  mb-5"
            style={{ backgroundColor: "var(--bgCircle--)" }}
          >
            <FontAwesomeIcon
              icon={faLifeRing}
              bounce
              className="text-4xl"
              style={{ color: "var(--primaryColor--)" }}
            />
          </div>
          <h2
            className="text-md font-black text-xl text-center  mb-5"
            style={{ color: "var(--primaryColor--)" }}
          >
            الهدف  
          </h2>
          <h4  className="text-md font-bold text-md text-center "
            style={{ color: "var(--secandaryColor--)" }}>تسهيل بدء وممارسة الأعمال الاقتصادية</h4>
            <h5   className="text-md font-bold text-md text-center "
            style={{ color: "var(--secandaryColor--)"}}> وتحسين جودة المتطلبات الحكومية </h5>
        </div>


             <div className="flex flex-col items-center ">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center  mb-5"
            style={{ backgroundColor: "var(--bgCircle--)" }}
          >
            <FontAwesomeIcon
              icon={faLightbulb}
              bounce
              className="text-4xl"
              style={{ color: "var(--primaryColor--)" }}
            />
          </div>
          <h2
            className="text-md font-black text-xl text-center  mb-5"
            style={{ color: "var(--primaryColor--)" }}
          >
            الرؤية  
          </h2>
          <h4  className="text-md font-bold text-md text-center "
            style={{ color: "var(--secandaryColor--)" }}>    أن تصبح المملكة العربية السعودية من</h4>
            <h5   className="text-md font-bold text-md text-center "
            style={{ color: "var(--secandaryColor--)"}}>    الدول العشرة الرائدة في العالم </h5>
        </div>

        


          <div className="flex flex-col items-center ">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center  mb-5"
            style={{ backgroundColor: "var(--bgCircle--)" }}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              bounce
              className="text-4xl"
              style={{ color: "var(--primaryColor--)" }}
            />
          </div>
          <h2
            className="text-md font-black text-xl text-center  mb-5"
            style={{ color: "var(--primaryColor--)" }}
          >
            الرسالة  
          </h2>
          <h4  className="text-md font-bold text-md text-center "
            style={{ color: "var(--secandaryColor--)" }}> تقديم نموذج خدمات يعزز القدرة التنافسية </h4>
            <h5   className="text-md font-bold text-md text-center "
            style={{ color: "var(--secandaryColor--)"}}>  وخلق بيئة أعمال جذابة </h5>
        </div>

      </div>
    </div>
  );
}

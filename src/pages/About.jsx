// import ab from "../assets/sbc-color-logo.png";
import Htext from "../component/HText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLifeRing,
  faLightbulb,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import AboutComponent from "../component/AboutComponent";
export default function About() {
  return (
    <div
      id="عن المركز"

      className=" flex justify-center items-center flex-col  h-screen  "
      style={{ color: "var(--primaryColor--)", backgroundColor:"var(--bgColor--)" }}
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
    

<AboutComponent
icon={faLifeRing}
h1="الهدف"
p1="تسهيل بدء وممارسة الأعمال الاقتصادية"
p2="وتحسين جودة المتطلبات الحكومية"
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

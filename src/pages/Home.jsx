import React from "react";
import bg from "../assets/bgsbc.png";
import { motion as Motion } from "motion/react";
import FeatureCard from "../components/FeatureCard"
import {
  faLifeRing,
  faHandshake,
  faGlobe,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <div
      id="الرئيسية"
      className="bg-cover bg-center  "
      style={{
        backgroundImage: `url(${bg}) `,
        backgroundColor: "var(--bgColor--)",
        color: "var(--textColor--)",
      }}
    >
      <Motion.div
        initial={{ opacity: 0, y: 200 }} // بداية: شفاف وتحته
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1 , y: 0 }} // بعد الدخول: شفاف بالكامل وفي مكانه
        transition={{ duration: 2,ease: "easeOut" }}// كل مازادت المدة كل ما الحركة صارت ابطأ
        viewport={{ once: false, amount: 0.8 }} 
        className=" flex flex-col justify-around min-h-screen w-full p-6 "
      >
        <div className="space-y-3">
        <Motion.h2 
          initial={{scale:0.8 ,opacity: 0, y: 50}}
            animate={{ opacity: 1, y: 0 ,scale:1}}
            transition={{ duration: 2,ease: "easeOut" }}// كل مازادت المدة كل ما الحركة صارت ابطأ
            viewport={{ once: false, amount: 0.8 }} 
            className="text-xl md:text-4xl mt-2.5 font-thamanyahDisplayBold "
           

        >
        المركز السعودي للأعمال
        </Motion.h2>
      
        <div className="space-y-1 font-thamanyahTextLight">
          <h2 className="text-sm max-w-3xl flex-wrap sm:text-2xl text-gray-300   ">
          مركز يُعنى بتيسير إجراءات بدء الأعمال الاقتصادية، ومزاولتها، وإنهائها، وتقديم جميع الخدمات ذات الصلة؛ وفقًا لأفضل الممارسات الدولية، لتوفير تجربة أعمال أكثر سهولة وكفاءة وموثوقية.
          </h2>
          
        </div>
        </div>
           <div className="flex md:flex-row  flex-col gap-14   font-thamanyahTextMeduim ">
    <FeatureCard icon={faHandshake} title="شراكة في النجاح"/>
        <FeatureCard icon={faLifeRing} title=" تمكين الاعمال "/>
        <FeatureCard icon={faGlobe} title="  معايير عالمية "/>
        <FeatureCard icon={faChartLine} title="   موثوقية "/>

    </div>
      </Motion.div>
   
    </div>
  );
}

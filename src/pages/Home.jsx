import React from "react";
import bg from "../assets/bgSBCBlue.png";
import { motion as Motion } from "motion/react";
// import Header from '../components/Header'
// .. comeback to pages folder
// why there is an error when the motion is imported?
export default function Home() {
  return (
    <div
      id="الرئيسية"
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center  "
      style={{
        backgroundImage: `url(${bg}) `,
        backgroundColor: "var(--bgColor--)",
        color: "var(--textColor--)",
      }}
    >
      <Motion.div
        initial={{ opacity: 0, y: 200 }} // بداية: شفاف وتحته
        whileInView={{ opacity: 1, y: 0 }}
        // animate={{ opacity: 1 , y: 0 }} // بعد الدخول: شفاف بالكامل وفي مكانه
        transition={{ duration: 2,ease: "easeOut" }}// كل مازادت المدة كل ما الحركة صارت ابطأ
        viewport={{ once: false, amount: 0.8 }} 
        className="mt-20 space-y-7"

      >
        <Motion.h2
          initial={{scale:0.8 ,opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ scale:1}}
            transition={{ duration: 2,ease: "easeOut" }}// كل مازادت المدة كل ما الحركة صارت ابطأ
            viewport={{ once: false, amount: 0.8 }} 
            className="text-4xl"

        >
        المركز السعودي للأعمال
        </Motion.h2>
      
        <div className="space-y-1">
          <h2 className="text-2xl max-w-3xl  text-gray-300   ">
            مركز يُعنى بتيسير إجراءات بدء الأعمال الاقتصادية، ومزاولتها،
            وإنهائها
          </h2>
          <h2 className="text-2xl max-w-3xl text-gray-300  ">
            وتقديم جميع الخدمات ذات الصلة؛ وفقًا لأفضل الممارسات الدولية
          </h2>
        </div>
      </Motion.div>
    </div>
  );
}

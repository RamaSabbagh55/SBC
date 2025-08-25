import Htext from '../components/HText'
import FAQComponent from '../components/FAQComponent'

// export default function FAQ(){
// return(

// <div id ="الأسئلة الشائعة" className="  h-screen w-full  justify-center items-center flex flex-col  space-y-4 " style={{backgroundColor:"var(--bgColor--)"}}>
//     {/* <div className=' flex justify-center items-center '> */}
//  <Htext title="الأسئلة الشائعة "/>
// <FAQComponent
//  question="ماهي البرامج التابعة للمركز السعودي للأعمال؟"
//  answer="برنامج قوائم والسجل الموحد للحقوق على الأموال المنقولة
// "/>

// <FAQComponent
//  question="كيف يمكن التسجيل في المنصة الموحدة للمركز السعودي للأعمال؟ "
//  answer=" عن طريق تسجيل المعلومات الخاصة بالمستخدم أو عن طريق النفاذ الوطني "
//  />

//  <FAQComponent
//  question="ماهي المدة اللازمة كحد أقصى لإيداع القوائم المالية في موقع قوائم بعد تسليم العميل تقرير المراجعة؟ "
//  answer=" ينبغي إيداع القوائم المالية فور الإنتهاء من تقرير المراجعة مع مراعاة المدة المحددة بنظام الشركات الجديد  
// "
//  />

// <FAQComponent
// question="هل يمكن إيداع القوائم المالية للمؤسسات الفردية؟"
// answer="    نعم يمكن إيداع جميع القوائم المالية المدققة من قبل مكتب المحاسبة والمراجعة "
// />
// </div>
// )
// }

import React from 'react'

const FAQ = () => {
  return (
    <div id="الأسئلة الشائعة" className='W-full h-screen p-10  shadow-amber-900'>
         <Htext title="الأسئلة الشائعة "/>

        <FAQComponent/>
    </div>
  )
}

export default FAQ
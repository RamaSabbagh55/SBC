import React from 'react'
import Accordain from './Accordain'
import Htext from '../components/HText'

const FAQComponent = () => {
  return (
    < >
   {/* <Htext title="الأسئلة الشائعة " page ="faq" className="mt-24" /> */}

    <div className='p-6 bg-white shadow-md rounded-xl  divide-y divide-gray-400 w-full  transition duration-200 ease-in-out hover:shadow-xl  '
    ><Accordain
    title="ماهي البرامج التابعة للمركز السعودي للأعمال؟" 
    answer="برنامج قوائم والسجل الموحد للحقوق على الأموال المنقولة "/>
    <Accordain
    title=" كيف يمكن التسجيل في المنصة الموحدة للمركز السعودي للأعمال؟ "
    answer="عن طريق تسجيل المعلومات الخاصة بالمستخدم أو عن طريق النفاذ الوطني "/>
      <Accordain
    title=" ماهي المدة اللازمة كحد أقصى لإيداع القوائم المالية في موقع قوائم بعد تسليم العميل تقرير المراجعة؟ "
    answer=" ينبغي إيداع القوائم المالية فور الإنتهاء من تقرير المراجعة مع مراعاة المدة المحددة بنظام الشركات الجديد "/>
      <Accordain
    title=" هل يمكن إيداع القوائم المالية للمؤسسات الفردية؟ "
    answer="  نعم يمكن إيداع جميع القوائم المالية المدققة من قبل مكتب المحاسبة والمراجعة  "/>
    </div>
    </>
  )
}

export default FAQComponent


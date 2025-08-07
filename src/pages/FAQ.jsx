import Htext from '../component/HText'
export default function FAQ(){
return(

<div id ="الأسئلة الشائعة" className="  h-screen w-full  justify-center items-center flex flex-col  space-y-4">
    {/* <div className=' flex justify-center items-center '> */}
            <Htext title="الأسئلة الشائعة "/>

<div className='p-2 w-300 h-20  border-2 border-blue-900 rounded-lg justify-center items-center ml-7  transition-all duration-300   hover:shadow-xl  hover:bg-gray-100'>
      <div  dir="rtl"  className="mb-6 flex text-right flex-col   ">
        <h2 className="text-lg  text-right font-semibold mb-2" style={{color:"var(--primaryColor--)"}}>ماهي البرامج التابعة للمركز السعودي للأعمال؟   </h2>
        <p className="text-gray-700" style={{color:"var(--secandaryColor--)"}}> برنامج قوائم والسجل الموحد للحقوق على الأموال المنقولة</p>
      </div>
</div>

<div className='p-2 w-300 h-20  border-2 border-blue-900 rounded-lg justify-center items-center ml-7  transition-all duration-300   hover:shadow-lg hover:bg-gray-100'>
      <div  dir="rtl"  className="mb-6 flex text-right flex-col   ">
        <h2 className="text-lg  text-right font-semibold mb-2" style={{color:"var(--primaryColor--)"}}>  كيف يمكن التسجيل في المنصة الموحدة للمركز السعودي للأعمال؟   </h2>
        <p className="text-gray-700" style={{color:"var(--secandaryColor--)"}}>     عن طريق تسجيل المعلومات الخاصة بالمستخدم أو عن طريق النفاذ الوطني  </p>
      </div>
</div>

<div className='p-2 w-300 h-20  border-2 border-blue-900 rounded-lg justify-center items-center ml-7  transition-all duration-300   hover:shadow-lg hover:bg-gray-100'>
      <div  dir="rtl"  className="mb-6 flex text-right flex-col   ">
        <h2 className="text-lg  text-right font-semibold mb-2" style={{color:"var(--primaryColor--)"}}>ماهي المدة اللازمة كحد أقصى لإيداع القوائم المالية في موقع قوائم بعد تسليم العميل تقرير المراجعة؟ </h2>
        <p className="text-gray-700" style={{color:"var(--secandaryColor--)"}}>    ينبغي إيداع القوائم المالية فور الإنتهاء من تقرير المراجعة مع مراعاة المدة المحددة بنظام الشركات الجديد   </p>
      </div>
</div>

<div className='p-2 w-300 h-20  border-2 border-blue-900 rounded-lg justify-center items-center ml-7  transition-all duration-300   hover:shadow-lg  hover:bg-gray-100'>
      <div  dir="rtl"  className="mb-6 flex text-right flex-col   ">
        <h2 className="text-lg  text-right font-semibold mb-2" style={{color:"var(--primaryColor--)"}}>  هل يمكن إيداع القوائم المالية للمؤسسات الفردية؟</h2>
        <p className="text-gray-700" style={{color:"var(--secandaryColor--)"}}>   نعم يمكن إيداع جميع القوائم المالية المدققة من قبل مكتب المحاسبة والمراجعة</p>
      </div>
</div>



</div>

)
}
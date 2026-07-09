import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBuilding } from "@fortawesome/free-regular-svg-icons"; // regular version
// import { faSchoolCircleExclamation } from "@fortawesome/free-solid-svg-icons";
// import { faAddressCard } from "@fortawesome/free-regular-svg-icons/faAddressCard";
import Htext from "../components/HText";
import EsevicesCompoonent from "../components/EservicesComponent";
import gif1 from "../assets/icons/goal-icon-1.gif";
import gif2 from "../assets/icons/goal-icon-2.gif";
import gif3 from "../assets/icons/goal-icon-3.gif";



export default function Eservise() {
  return (
    <div
      id="الخدمات"
      className=" flex justify-center items-center flex-col  min-h-screen" 
      // justify = تحديد محاذاة العناصر على المحور الرئيسي (Main Axis).
      style={{ color: "var(--bgColor--)" ,backgroundColor:"var(--bgColor--)"}}
    >
      <Htext title="الخدمات الإلكترونية " />
      <div className=" flex  flex-wrap  justify-center  gap-10 md:gap-y-14">

          <EsevicesCompoonent
          icon={gif1}
          text="  إدارة التفاويض  "
          text2="خدمة إلكترونية لإدارة التفاويض ومتابعة 
          الصلاحيات بكل كفاءة"
        /> 
             <EsevicesCompoonent
          icon={gif2}
          text=" تأسيس شركة مساهمة"
          text2="خدمة إلكترونية لتأسيس الشركات المتخصصة
           بكل سهولة ويسر"
        /> 
                <EsevicesCompoonent
          icon={gif3}
          text=" توثيق التجارة الاإلكترونية  "
          text2="خدمة إلكترونية تتيح إصدار وثائق الجمرك 
          بشكل سريع وامن"

        /> 


      </div>
    </div>






  );
}



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBuilding } from "@fortawesome/free-regular-svg-icons"; // regular version
// import { faSchoolCircleExclamation } from "@fortawesome/free-solid-svg-icons";
// import { faAddressCard } from "@fortawesome/free-regular-svg-icons/faAddressCard";
import Htext from "../component/HText";
import EsevicesCompoonent from "../component/EservicesComponent";
import gif1 from "../assets/icons/goal-icon-1.gif";
import gif2 from "../assets/icons/goal-icon-2.gif";
import gif3 from "../assets/icons/goal-icon-3.gif";



export default function Eservise() {
  return (
    <div
      id="الخدمات"
      className=" flex justify-center items-center flex-col  h-screen" 
      // justify = تحديد محاذاة العناصر على المحور الرئيسي (Main Axis).
      style={{ color: "var(--bgColor--)" ,backgroundColor:"var(--bgColor--)"}}
    >
      <Htext title="الخدمات الإلكترونية " />
      <div className=" flex space-x-10  ">
        {/* <EsevicesCompoonent icon={faBuilding} text="تأسيس شركة مساهمة" />
        
        <EsevicesCompoonent
          icon={faSchoolCircleExclamation}
          text="تأسيس شركة ذات مسؤولية محدودة"
        />

        <EsevicesCompoonent
          icon={faAddressCard}
          text=" سجل تجاري لمؤسسة فردية  "
        /> */}
          <EsevicesCompoonent
          icon={gif1}
          text="  إدارة التفاويض  "
        /> 
             <EsevicesCompoonent
          icon={gif2}
          text=" تأسيس شركة مساهمة"
        /> 
                <EsevicesCompoonent
          icon={gif3}
          text=" توثيق التجارة الاإلكترونية  "
        /> 


      </div>
    </div>






  );
}

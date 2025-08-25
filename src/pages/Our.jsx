 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    // import { faBuilding } from "@fortawesome/free-regular-svg-icons"; // regular version
    // import { faSchoolCircleExclamation } from "@fortawesome/free-solid-svg-icons";
    // import { faAddressCard } from "@fortawesome/free-regular-svg-icons/faAddressCard";
    import Htext from "../components/HText";
    import EsevicesCompoonent from "../components/EservicesComponent";
    import gif1 from "../assets/icons/goal-icon-1.gif";
    import gif2 from "../assets/icons/goal-icon-2.gif";
    import gif3 from "../assets/icons/goal-icon-3.gif"; 
    import OurComp from "../components/OurComp";  
    
    
    
    export default function Eservise() {
      return (
        <div
          id="الخدمات"
          className=" flex justify-center items-center flex-row  space-x-10  h-screen" 
          // justify = تحديد محاذاة العناصر على المحور الرئيسي (Main Axis).
          style={{ color: "var(--bgColor--)" ,backgroundColor:"var(--bgColor--)"}}
        >
         
    
              <OurComp
              icon={gif1}
              text="  إدارة التفاويض  "
            /> 
                 <OurComp
              icon={gif2}
              text=" تأسيس شركة مساهمة"
            /> 
                    <OurComp
              icon={gif3}
              text=" توثيق التجارة الاإلكترونية  "
            /> 
    
    
          </div>
    
    
    
    
    
    
      );
    }
    
 

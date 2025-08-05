
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons'; // regular version
import {  faSchoolCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons/faAddressCard';
import Htext from '../component/HText';

export default function Eservise() {

  return (

    <div id="الخدمات"  className=" flex justify-center items-center flex-col  z-10 h-screen" style={{color:"var(--bgColor--)"}}>
                  <Htext title="الخدمات الإلكترونية "/>
      <div className=" flex     space-x-10  ">
        <div className="bg-white rounded-xl shadow-md p-3 text-center w-70 h-50 transition-all duration-300 hover:shadow-lg hover:scale-108 hover:bg-gray-100">

<FontAwesomeIcon
  icon={faBuilding}
  style={{ color: "var(--primaryColor--)" }}
  className=" mt-6 text-5xl"
/>
          <h3 className="text-green-900 mt-6 text-lg font-semibold  mt-6
"  style={{ color: "var( --primaryColor--)" }}>
            تأسيس شركة مساهمة{" "}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-md p-3 text-center w-70 h-50  transition-all duration-300   hover:shadow-lg hover:scale-108 hover:bg-gray-100">
         <FontAwesomeIcon icon={faSchoolCircleExclamation}  style={{ color: "var(--primaryColor--)"}} className=" text-5xl  mt-6"/>
          <h3 className=" mt-6 text-lg font-semibold  text-green-900"  style={{ color: "var( --primaryColor--)" }}>
            تأسيس شركة ذات مسؤولية محدودة
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-3 text-center w-70 h-50  transition-all duration-300   hover:shadow-lg hover:scale-108 hover:bg-gray-100">
<FontAwesomeIcon icon={faAddressCard} style={{ color: "var(--primaryColor--)" }} className=" text-5xl  mt-6" />
          <h3 className="  text-lg font-semibold  mt-6"  style={{ color: "var( --primaryColor--)" }}>
            سجل تجاري لمؤسسة فردية
          </h3>
        </div>
      </div>
    </div>
  );
}

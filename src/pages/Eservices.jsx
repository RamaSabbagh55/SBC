import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons"; // regular version
import { faSchoolCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons/faAddressCard";
import Htext from "../component/HText";
import EsevicesCompoonent from "../component/EservicesComponent";

export default function Eservise() {
  return (
    <div
      id="الخدمات"
      className=" flex justify-center items-center flex-col  h-screen"
      style={{ color: "var(--bgColor--)" }}
    >
      <Htext title="الخدمات الإلكترونية " />
      <div className=" flex space-x-10  ">
        <EsevicesCompoonent icon={faBuilding} text="تأسيس شركة مساهمة" />
        
        <EsevicesCompoonent
          icon={faSchoolCircleExclamation}
          text="تأسيس شركة ذات مسؤولية محدودة"
        />

        <EsevicesCompoonent
          icon={faAddressCard}
          text=" سجل تجاري لمؤسسة فردية  "
        />
      </div>
    </div>
  );
}


export default function Eservise() {
  return (
    <div className=" flex   z-10 h-screen bg-white">
      <div className=" flex items-center  ml-40 space-x-10  ">
        <div className="bg-white rounded-xl shadow-md p-3 text-center w-70 h-50 hover:gray-300">
          <img  src="" alt="أيقونة" className="mx-auto mt-6 w-10 h-10 " />
          {/* <i class="fa-solid fa-building" style="color: #098cf1;"></i> */}

          <h3 className="text-blue-900 mt-6 text-lg b-10">
            تأسيس شركة مساهمة{" "}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-md p-3 text-center w-70 h-50 hover:gray-300">
          <img src="" alt="أيقونة" className="mx-auto mt-6 w-10 h-10" />
          <h3 className="text-blue-900 mt-6 text-lg b-10">
            تأسيس شركة ذات مسؤولية محدودة
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-md p-3 text-center w-70 h-50 hover:gray-300">
          <img
            src="/icons/medical-icon.svg"
            alt="أيقونة"
            className="mx-auto mt-6 w-10 h-10"
          />
          <h3 className="text-blue-900 mt-6 text-lg b-10">
            سجل تجاري لمؤسسة فردية
          </h3>
        </div>
      </div>
    </div>
  );
}

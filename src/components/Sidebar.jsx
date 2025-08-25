// import React, { useState } from "react";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false); // state not open 

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       {/* Button to toggle dropdown */}
//       <button
//         onClick={toggleMenu}
//         className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium md:hidden text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
//       >
//         Menu
//       </button>

//       {/* Dropdown menu */}
//       {isOpen && (
//         <div className="absolute left-5 z-10 mt-2 w-100 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
//           <div className="py-1">
//             <a
//               href="#الرئيسية"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// >
//               الرئيسية
//             </a>
//             <a
//               href="#عن المركز"
//               className="block px-4 py-2 text-sm text-white hover:bg-gray-900"
//             >
//               عن المركز
//             </a>
//             <a
//               href="#الخدمات"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             >
//               الخدمات الإلكترونية
//             </a>
//                 <a
//               href="#الأسئلة الشائعة"
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             >
//               الأسئلة الشائعة
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa"; // أيقونات المنيو والإغلاق

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* أيقونة المنيو أعلى اليسار */}
      <button
        onClick={toggleMenu}
        className="p-3 fixed top-4 left-4 -scale-z-200 text-white bg-blue-600 rounded-md m-2  z-100 focus:outline-none"
      >
        {/* {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />} */}
      </button>

      {/* الخلفية الشفافة عند فتح القائمة */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* السايد بار */}
      <div
        className={`fixed top-0 left-0 h-full w-1/4 max-w-[200px] bg-white shadow-lg z-50 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="p-4">
          <a
            href="#الرئيسية"
            className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
            onClick={toggleMenu}
          >
            الرئيسية
          </a>
          <a
            href="#عن المركز"
            className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
            onClick={toggleMenu}
          >
            عن المركز
          </a>
          <a
            href="#الخدمات"
            className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
            onClick={toggleMenu}
          >
            الخدمات الإلكترونية
          </a>
          <a
            href="#الأسئلة الشائعة"
            className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
            onClick={toggleMenu}
          >
            الأسئلة الشائعة
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

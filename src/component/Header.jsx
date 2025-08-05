
  import logo from "../assets/sbcLogo.png"
  import VB from "../assets/vision2030.png"
  export default function Header() {
  return (
    // without bg-white the header will be transparent
    <header className="text-black w-full fixed top-0 z-50 bg-white"> 
      <div dir="rtl" className=" flex  justify-between items-center p-4 text-xl flex space-x-10
">
        {/* Logo */}
        <div className=" flex items-center space-x-6  "> 
          <img src={logo} alt="لا توجد صورة " width="150" height="50"/>
<img src={VB} alt="لا توجد صورة " width="70" height="50"/>
          
          </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-10 ml-80 text-blue">
          <a href="#الرئيسية" className="hover:text-gray-300">الرئيسية</a>
          <a href="#عن المركز " className="hover:text-gray-300">  عن المركز</a>
          <a href="#الخدمات الإلكترونية"className="hover:text-gray-300">الخدمات الإلكترونية</a>
          <a href="#الأسئلة الشائعة" className="hover:text-gray-300"> الأسئلة الشائعة</a>
        </nav>
   <div >
      <button className="bg-transparent px-3 py-1.5 text-base
 rounded hover:bg-white border-2  transition duration-700 ease-in-out ">
        سجل الان 
      </button>
    </div>


      
      
      </div>


    </header>
  );
}


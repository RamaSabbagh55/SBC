import logo from "../assets/sbcLogo.png";
import VB from "../assets/visionBoard.png";
export default function Header() {
  return (
    // without bg-white the header will be transparent
    <header className=" w-full fixed top-0 z-50  " style={{ backgroundColor: "var(  --bgCircle--)", color: "var(--primaryColor--)" }}>
      <div
        dir="rtl"
        className=" flex  justify-between items-center p-3 text-md flex space-x-10"
      >
        {/* Logo */}
        <div className=" flex items-center space-x-6  "> {/*flex start from LTR but in my case start from RTL CUZ    dir="rtl" in the above   */}
          <img src={logo} alt="شعار الموقع " width="150" height="50" />
          <img src={VB} alt="  شعار رؤية المملكة العربية السعودية  " width="70" height="50" />
           <nav className="hidden md:flex space-x-10  justify-end  px-10" style={{color:"var(--primaryColor--)"}}>
          <a href="#الرئيسية" className="hover:scale-105">
            الرئيسية
          </a>
          <a href="#عن المركز" className="hover:scale-105 hover:text-black-800 active:text-black ">
            {" "}
            عن المركز
          </a>
          <a href="#الخدمات" className="hover:scale-105">
            الخدمات الإلكترونية
          </a>
          <a href="#الأسئلة الشائعة" className="hover:scale-105">
            {" "}
            الأسئلة الشائعة
          </a>
        </nav>
        </div>
        <div>
          <button
            className="text-white text-xs px-4 py-1.5 active:shadow-s
 rounded-3xl transition duration-700 ease-in-out  shadow-m  hover:scale-110  ml-5 " style={{background:"var(--primaryColor--)"}}
          >
            سجل الان
          </button>
        </div>
      </div>
    </header>
  );
}

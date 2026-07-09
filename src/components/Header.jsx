import logo from "../assets/sbcLogo.png";
import VB from "../assets/visionBoard.png";
import{useEffect,useState} from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("الرئيسية");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["الرئيسية", "عن المركز", "الخدمات", "الأسئلة الشائعة"];

      for (let section of sections) {
        const element = document.getElementById(section);//.getBoundingClientRect() تجيب موقعه بالشاشة 
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section);// اول شييستدعي سيت اكتف بعدين اكتف تحت
            break; // توقف البحث عن القسم البعده
          }
        }
      }
    };
    console.log("Updattting !");
    console.log("HI");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  useEffect(()=>{


    document.title=  `Rama| ${active}`
  } ,[active]);

  return (
    <header
      style={{
        backgroundColor: "var(--bgCircle--)",
        color: "var(--primaryColor--)",
      }}
      className="w-full   sticky top-0 z-50 dark:bg-slate-800">
      <div className=" flex font-thamanyahTextMeduim items-center justify-between ">
        {/* Logo */}
        <div className=" flex  p-3 items-center justify-between text-md space-x-10 ">
          
          {/*flex start from LTR but in my case start from RTL CUZ    dir="rtl" in the index.html    */}
          <div className="flex justify-end space-x-5">
            <img src={logo} alt="شعار الموقع " width="150" height="50" />
            <img
              src={VB}
              alt="  شعار رؤية المملكة العربية السعودية  "
              width="70"
              height="50"
            />
          </div>
          <nav className=" hidden md:flex gap-6 p-4">
            {["الرئيسية", "عن المركز", "الخدمات", "الأسئلة الشائعة"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  // onClick={() => handleClick(link)}
                  className={`cursor-pointer hover:scale-105 transition ${
                    active === link
                      ? "font-extrabold text-black border-b-2 border-black"
                      : "text-gray-500"
                  }`}
                >
                  {link}
                </a>
              )
            )}
          </nav>
        </div>
        <div className=" ml-6  ">
          <button
            className="  text-white text-xs px-4 py-1.5 active:shadow-s
 rounded-3xl transition duration-700 ease-in-out hidden sm:block shadow-m  hover:scale-110 cursor-pointer "
            style={{ background: "var(--primaryColor--)" }}
          >
            سجل الان
          </button>

          <div className="md:hidden ">
            <button
              style={{ backgroundColor: "var(--primaryColor--)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-xl px-3 py-1 rounded"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Example */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-48 bg-white shadow-lg flex flex-col text-right p-4 md:hidden">
          {["الرئيسية", "عن المركز", "الخدمات", "الأسئلة الشائعة"].map(
            (link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => {
                  // handleClick(link);
                  setMenuOpen(false); // يغلق القائمة بعد الضغط
                }}
                className="py-2 px-3 text-gray-700 hover:text-black hover:bg-gray-100 rounded"
              >
                {link}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}

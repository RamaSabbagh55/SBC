import ab from "../assets/sbc-color-logo.png";

export default function About() {
  return (
    <div className=" flex  z-10 h-screen bg-white">
      <div className="flex items-center p-8  text-black">
        <h5 className="text-right text-2xl ">
          مركز يُعنى بتيسير إجراءات بدء الأعمال الاقتصادية، ومزاولتها، وإنهائها،
          وتقديم جميع الخدمات ذات الصلة؛ وفقًا لأفضل الممارسات الدولية. وقد أُسس
          المركز بموجب قرار مجلس الوزراء رقم (456)، الصادر بتاريخ 11 شعبان
          1440هـ، وبموجبه يرتبط تنظيميًا بمجلس الشؤون الاقتصادية والتنمية.
        </h5>
        <img src={ab} alt="لا توجد صورة " width="180" height="50" />
      </div>
    </div>
  );
}

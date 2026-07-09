import Htext from '../components/HText'
import FAQComponent from '../components/FAQComponent'
const FAQ = () => {
  return (
    <div id="الأسئلة الشائعة" className=' flex  flex-col  items-center justify-center  min-h-screen'>
   <Htext title="الأسئلة الشائعة " page ="faq" />

        <FAQComponent/>
    </div>
  )
}

export default FAQ
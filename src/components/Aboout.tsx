import { AiOutlineTwitter } from "react-icons/ai";
import{BsInstagram} from "react-icons/bs"
import{FaFacebookF} from "react-icons/fa"

export function About(){
    return <>
   <div className="about-container">
   <div className="block1-about">
     <div className="about-p">
        <h1>متجر نباتاتي</h1>
        <p>متجر متخصص في نباتات الزينة الداخلية والخارجية واكسسواراتها والتي تجهيزها بعناية لتدوم، كما نحرص على جعل تجربتكم في شراء النباتات ومستلزماتها عبر متجر نباتاتي تجربة سهلة ومميزة</p>
     </div>
    </div>
    <div className="about-text1">ليس ذلك فقط! .. نباتاتنا تصل اليكم مع بطاقة تحتوي على كود يمكنك بسهولة مسحها بكاميرا الجوال او قارئ الكود لتحصل على معلومات كاملة عن نبتتك التي قمت بشرائها مع معلومات عن العناية بها!
    </div>
    <h2 className="about-text1">هل ترغب بمعرفة المزيد عن النباتات وطريقة العناية بها؟</h2>
    <div className="about-text1">نسعد بمتابعتكم لحساباتنا على شبكات التواصل والتعرف باستمرار على النباتات وطرق العناية بها مع افكار ومعلومات متجددة وكذلك التفاعل مع المشاكل التي تواجهكم ومساعدتكم في ايجاد الحلول المناسبة لها.</div>
    
    <div className="about-icons">
        <div className="circle-about"><FaFacebookF size={38}/></div>
        <div className="circle-about"> <BsInstagram size={38}/></div>
        <div className="circle-about"> <AiOutlineTwitter size={38}/></div>
    </div>

    <div>
    <p className="about-text2">شركة نباتاتي المنزلية التجارية</p>
    <p className="about-text2">شركة ذات مسؤولية محدودة</p>
    <p className="about-text2">سجل تجاري رقم 1010514991</p>
    <p className="about-text2">الرقم الضريبي 310519233200003</p>
    </div>
   
   </div>
    </>
}
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function MyAddress() {
    return (
        <><h1 className="profile-super">حسـابي</h1>
        <div className="address-contenr">
            <p>العناوين التالية سيتم استخدامها في صفحة إتمام الطلب بشكل افتراضي.</p>
       <div className="address-content">
        <div className="address-title">
            <h3>عنوان الفاتورة</h3>
            <i>لم تقم بإعداد هذا العنوان بعد</i>
        </div>
        <div className="address-title">
            <h3>عنوان الشحن</h3>
            <i>لم تقم بإعداد هذا العنوان بعد</i>
        </div>
       </div>
       </div>
        <div className="sidenav-account">
            <div className="icon-user"> <AiOutlineUser size={30} /></div>
            <p> lamia</p>
            <Link to={'/myOrdres'}><a href="#g">طلباتي</a></Link>
            <Link to={'/myaddress'}><a href="#g">عناويني</a></Link>
            <Link to={'/profile'}><a href="#g">تفاصيل حسابي</a></Link>
            <Link to={'/'}> <a href="#g">العروض الاسبوعية</a></Link>
        </div></>
    );
}
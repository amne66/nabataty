import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MyOrders() {
    return (
        <><h1 className="profile-super">حسـابي</h1><><div className="order-ontainer">
            <div className="order-btn">تصُّفح المنتجات</div>
            <h4>لم يتم تنفيذ أي طلب بعد</h4>

        </div>
            <div className="sidenav-account">
                <div className="icon-user"> <AiOutlineUser size={30} /></div>
                <p> lamia</p>
                <Link to={'/myOrdres'}><a href="g">طلباتي</a></Link>
                <Link to={'/myaddress'}><a href="g">عناويني</a></Link>
                <Link to={'/profile'}><a href="g">تفاصيل حسابي</a></Link>
                <Link to={'/'}> <a href="g">العروض الاسبوعية</a></Link>
            </div></></>



    );
}
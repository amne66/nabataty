import { getAuth } from "firebase/auth";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IOrder, orders } from "../data/orders";
import{IOrderProps} from "../data/orders"
import ViewOrder from "./Order";
import Order from "./Order";

export default function MyOrders() {

    let b = 'لم يتم تنفيذ أي طلب بعد';         
    const auth = getAuth();
    const user = auth.currentUser;
    const a = orders.filter((elem) => elem.data.userEmail === user?.email)    
    const orderDev = a.map((orders: IOrderProps) => <ViewOrder order={orders.data} />);
     if(a){
        b=''
     }

    return (
        <><h1 className="profile-super">حسـابي</h1><><div className="order-ontainer">
            <h4>{b}</h4>
            {orderDev}
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
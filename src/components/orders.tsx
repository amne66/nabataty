import { getAuth } from "firebase/auth";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { orders } from "../data/orders";

export default function MyOrders() {

        let orderStaus = '' ;
        let userEmail= ''; 
        let b = 'لم يتم تنفيذ أي طلب بعد';
        
    
        const auth = getAuth();
        const user = auth.currentUser;
    const searchIndex = orders.find((order) => order.data.userEmail === user?.email); 
    if(searchIndex){
        orderStaus = searchIndex.data.orderStaus;
        userEmail =searchIndex.data.userEmail;
        b=''
    }
     
     console.log(orders);
     
    console.log(user?.email)
    console.log(searchIndex);
    
  
    return (
        <><h1 className="profile-super">حسـابي</h1><><div className="order-ontainer">
            <div className="order-btn">تصُّفح المنتجات</div>
            <h4>{b}</h4>
            <h4>{orderStaus}</h4>
             <h4>{userEmail}</h4>
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
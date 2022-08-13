import { addDoc,collection, getDocs, onSnapshot, query, where } from "firebase/firestore";

import { Link } from "react-router-dom";
import { OrderDetails } from "./OrderDetails";
import { db } from "../firebaseSetup";
import { getAuth } from "firebase/auth";

export interface ICart {
	id: any;
    name: string;
	price: number;
    imageUrl:string;
}

export let cartArr: ICart[] = [];
export default function Checkout() {
    function order(){
        const auth = getAuth();
       const user = auth.currentUser;
       if(user){
        addDoc(collection(db, 'orders'),
         {
         cart:cartArr,
         orderStaus:'جاري التنفيذ',
         userEmail: user.email,   
        })    
     cartArr=[];}
    }

    let sum = 0;
    for (let i = 0; i < cartArr.length; i++) {
        sum += cartArr[i].price;}   
    const cartDev = cartArr.map((carts) => <OrderDetails cart={carts} />);
    return (  
        <><div className="bill-container">
            <div className="bill-form">
                {/* information bill */}
                <h3 className="bill-title">تفاصيل الفاتورة</h3>
                <h4 className="name-bill-text">الإسم *</h4>
                <input className="bill-input" type="text" />
                <h4 className="phone-text">رقم الجوال *</h4>
                <input className="bill-input" type="text" />
                <h4 className="bill-text">البريد الإلكتروني *</h4>
                <input className="bill-input" type="text" />
                <br/>
                <div className="shipping-optional">
                <input type="radio" id="html" name="fav_language" value="HTML"/>
             <label htmlFor="html"> الشحن الي عنواني</label><br/>
          <input type="radio" id="html" name="fav_language" value="HTML"/>
           <label htmlFor="html"> إهداء الي شخص اخر؟</label><br/>
          </div>
         <label htmlFor="form-city">المدينة *</label>
        <select id="select">
        <option value="volvo">الرياض</option>
        <option value="saab">جدة</option>
      <option value="opel">الدمام</option>
         <option value="audi">ابها</option>
        </select>
            <h4 className="address-bill-text">اسم الحي *</h4>
                <input className="bill-input" type="text" />
            </div>
            <div className="checkout-container">
            <h3 className="checkout-text">طلبك</h3>
                <div className="checkout-title">
                <h4 className="checkout-text">المنتج</h4>
                <h4 className="checkout-text">المجموع</h4>
                </div>
                <div className="line-checkout"></div>
                <div>    
                {cartDev}
                </div>
                <div className="line-checkout"></div>
                <div className="checkout-title">
                <h4 className="checkout-text">المجموع</h4>
                <h4 className="checkout-text">{sum} ر.س (شامل ضريبة القيمة المضافة)</h4>
                </div>
                <div className="line-checkout"></div>
                <div className="checkout-title">
                <h4 className="checkout-text">الشحن</h4>
                <h4 className="checkout-text">سعر ثابت</h4>
                </div>
                <div className="checkout-title">
                <h4 className="checkout-text">الإجمالي	</h4>
                <h4 className="checkout-text">{sum} ر.س (شامل ضريبة القيمة المضافة)</h4>
                </div>
                <div className="line-checkout"></div>
                <label className="checkout-checkbox">
              <input type="checkbox" name="checkbox-profile" />
               الدفع عند الاستلام*
               </label>
                <label className="checkout-checkbox">
              <input type="checkbox" name="checkbox-profile" />
              لقد قرأتُ الشروط والأحكام وأوافق عليها  *
               </label>
               <Link to={'/bill'} className="checkout-btn noLine" onClick={order} ><div >ارسال الطلب</div></Link>
            </div>
        </div></>
    );
}
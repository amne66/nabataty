import { Link } from "react-router-dom";

export default function Checkout() {
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
                <div className="checkout-title">
                <h4 className="checkout-text">فيلوديندرون سلفر  × 1</h4>
                <h4 className="checkout-text">52 ر.س (شامل ضريبة القيمة المضافة)</h4>
                </div>
                <div className="line-checkout"></div>
                <div className="checkout-title">
                <h4 className="checkout-text">المجموع</h4>
                <h4 className="checkout-text">52 ر.س (شامل ضريبة القيمة المضافة)</h4>
                </div>
                <div className="line-checkout"></div>
                <div className="checkout-title">
                <h4 className="checkout-text">الشحن</h4>
                <h4 className="checkout-text">سعر ثابت</h4>
                </div>
                <div className="checkout-title">
                <h4 className="checkout-text">الإجمالي	</h4>
                <h4 className="checkout-text">52 ر.س (شامل ضريبة القيمة المضافة)</h4>
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
               <Link to={'/bill'} className="checkout-btn"><div >ارسال الطلب</div></Link>
            </div>
        </div></>
    );
}
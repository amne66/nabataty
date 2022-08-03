import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function MyProfile() {
  return ( <><>
      <h1 className="profile-super">حسـابي</h1>
      <div className="profile-container">
              <h4 className="profile-text">الاسم كامل *</h4>
              <input className="profile-input" type="text-profile" />
              <h4 className="profile-text">اسم العرض *</h4>
              <input className="profile-input" type="name-profile" />
              <h4 className="profile-text">البريد الإلكتروني * </h4>
              <input className="profile-input" type="email-profile" />
              <h4>تغيير كلمة المرور</h4>
              <h4 className="profile-text">كلمة المرور الحالية (اترك الحقل فارغاً إذا كنت لا تودّ تغييرها)</h4>
              <input className="profile-input" type="password-profile" />
              <h4 className="profile-text">كلمة المرور الجديدة (اترك الحقل فارغاً إذا كنت لا تودّ تغييرها)</h4>
              <input className="profile-input" type="password-profile" />
              <h4 className="profile-text">تأكيد كلمة المرور الجديدة</h4>
              <input className="profile-input" type="password-profile" />
              <div className="profile-flex">
              <label className="profile-checkbox">
              <input type="checkbox" name="checkbox-profile" />
                اشترك في النشرة الإخبارية
               </label>
              </div>
              <div className="profile-btn">حفظ التغيرات</div>
          
             </div>
  </>       <div className="sidenav-account">
          <div className="icon-user"> <AiOutlineUser size={30} /></div>
          <p> lamia</p>
          <Link to={'/myOrdres'}><a href="g">طلباتي</a></Link>
          <Link to={'/myaddress'}><a href="g">عناويني</a></Link>
          <Link to={'/profile'}><a href="g">تفاصيل حسابي</a></Link>
          <Link to={'/'}> <a href="g">العروض الاسبوعية</a></Link>
      </div></>
);
}
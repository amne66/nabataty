import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function MyProfile() {
  return ( <><>
      <h1 className="my-profile-h1">حسـابي</h1>
      <div className="profile-container">
          <div className="profile-in">
              <h4 className="profile-text">الاسم كامل *</h4>
              <input className="profile-input" type="text" />
              <h4 className="profile-text">اسم العرض *</h4>
              <input className="profile-input" type="name" />
              <h4 className="profile-text">البريد الإلكتروني * </h4>
              <input className="profile-input" type="email" />
              <h4>تغيير كلمة المرور</h4>
              <h4 className="profile-text">كلمة المرور الحالية (اترك الحقل فارغاً إذا كنت لا تودّ تغييرها)</h4>
              <input className="profile-input" type="password" />
              <h4 className="profile-text">كلمة المرور الجديدة (اترك الحقل فارغاً إذا كنت لا تودّ تغييرها)</h4>
              <input className="profile-input" type="password" />
              <h4 className="profile-text">تأكيد كلمة المرور الجديدة</h4>
              <input className="profile-input" type="password" />
              <div className="profile-flex">
                  <label className="form-profile">
                      <input type="checkbox" name="checkbox-profile" />
                  </label>
                  <p className="profile-text">اشترك في النشرة الإخبارية</p>
              </div>
              <div className="profile-btn">حفظ التغيرات</div>
          </div>
      </div>
  </><div className="sidenav-account">
          <div className="icon-user"> <AiOutlineUser size={30} /></div>
          <p> lamia</p>
          <Link to={'/myOrdres'}><a href="g">طلباتي</a></Link>
          <Link to={'/'}><a href="g">عناويني</a></Link>
          <Link to={'/profile'}><a href="g">تفاصيل حسابي</a></Link>
          <Link to={'/'}> <a href="g">العروض الاسبوعية</a></Link>
      </div></>
);
}
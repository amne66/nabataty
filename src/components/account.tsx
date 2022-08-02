/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function MyAccount() {
  return (
    
  <><div className='my-account-header'>
      <h1 className="my-profile-h1">حسـابي</h1>
      <div className='my-account'>
        

      </div>
    </div>
    <div className="contenr-account">
    <div className='account-content'>
        <p>
          مرحبًا
          <strong>  lamia</strong>
        </p>
        من خلال لوحة تحكم الحساب الخاص بك، يمكنك استعراض أحدث الطلبات،<br /> إدارة عناوين الشحن والفواتير الخاصة بك، بالإضافة إلى تعديل كلمة المرور وتفاصيل حسابك.

        <div className='boutton-content'>
          <button className="button-açcount">طلباتي</button>
          <button className="button-açcount ">عناويني</button>
          <button className="button-açcount ">تفاصيل حسابي</button>
          <button className="button-açcount ">العروض الاسبوعية</button>
        </div>
        </div>
<div className="sidenav-account">
<div className="icon-user"> < AiOutlineUser size={30} /></div>
        <p> lamia</p>
        <Link to={'/myOrdres'}><a href="#">طلباتي</a></Link>
        <Link to={'/'}><a href="#">عناويني</a></Link>
        <Link to={'/profile'}><a href="#">تفاصيل حسابي</a></Link>
        <Link to={'/'}> <a href="#">العروض الاسبوعية</a></Link>
</div>

      </div></>
     
  );
}
import { Link } from "react-router-dom"

export default function LoginAdmin() {
    return (
<div className="admin-container">
        <div className="login-admin">
               <h3 className="login-title-admin">تسجيل الدخول</h3>
                <h4 className="login-text-admin">اسم المستخدم أو البريد الإلكتروني </h4>
                <input className="login-input-admin" type="text" />
                <h4 className="login-text-admin">كلمة المرور</h4>
                <input className="login-input-admin" type="password" />
                </div>
                <Link to={'/AdminDashbord'} className="login-btn-admin"> 
                <div>تسجيل الدخول</div>
                </Link>
                <p className="forget-pass-admin">نسيت كلمة المرور؟</p>
            </div>

      
        
    );
}
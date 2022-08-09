import { Link } from "react-router-dom";

export function Login(){
   
  
   
    return (
    <><h1 className="my-account-h1">حسـابي</h1>
    <div className="login-container">
            <div className="sign-in">
                <h3 className="login-title">تسجيل الدخول</h3>
                <h4 className="login-text">اسم المستخدم أو البريد الإلكتروني </h4>
                <input className="login-input" type="text" />
                <h4 className="login-text">كلمة المرور</h4>
                <input className="login-input" type="password" />
                <div className="row-flex">
                    <input type="checkbox" />
                    <h4 className="login-text">تذكرني</h4>
                </div>
                <Link to={'/profile'} className="login-btn"> <div>تسجيل الدخول</div></Link>
                <p className="forget-pass">نسيت كلمة مرورك؟</p>
            </div>
            <div className="sign-up">
                <h3 className="login-title">تسجيل جديد</h3>
                <h4 className="login-text">البريد الألكتروني</h4>
                <input className="login-input" type="text" />
                <p className="link-password">سيتم إرسال رابط لتعيين كلمة مرور جديدة إلى عنوان بريدك الإلكتروني.</p>
                <div className="row-flex">
                    <input type="checkbox" />
                    <h4 className="login-text">اشترك في القائمة البريدية</h4>
                </div>
                <div className="login-btn">تسجيل جديد</div>
            </div>
        </div></>

);
}

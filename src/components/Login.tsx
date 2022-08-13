import { useRef } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function Login(){

  const emailRef:any = useRef<HTMLInputElement>(null);;
  const passwordRef:any = useRef<HTMLInputElement>(null);
function hh(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailRef, passwordRef)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}


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
                <h4 className="login-text">البريد الإلكتروني</h4>
                <input className="login-input"  type="text"  ref={emailRef} required />
                <h4 className="login-text">كلمة المرور</h4>
                <input className="login-input"  type="password" ref={passwordRef} required />
                <p className="link-password">سيتم إرسال رابط لتعيين كلمة مرور جديدة إلى عنوان بريدك الإلكتروني.</p>
                <div className="row-flex">
                    <input type="checkbox" />
                    <h4 className="login-text">اشترك في القائمة البريدية</h4>
                </div>
                <div className="login-btn" onClick={hh}>تسجيل جديد</div>
            </div>
        </div></>

);
}

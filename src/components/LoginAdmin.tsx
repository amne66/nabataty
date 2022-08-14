import { useState } from "react";
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseSetup";


export default function LoginAdmin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async () => {    
        try {
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
         
        } catch (error) {
        console.log(error)
          return;
        }
      };
     
    return (
<div className="admin-container">
        <div className="login-admin">
               <h3 className="login-title-admin">تسجيل الدخول</h3>
                <h4 className="login-text-admin">اسم المستخدم أو البريد الإلكتروني </h4>
                <input className="login-input-admin" type="text" onChange={(e) => setEmail(e.target.value)} />
                <h4 className="login-text-admin">كلمة المرور</h4>
                <input className="login-input-admin" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Link to={'/AdminDashbord'} className="login-btn-admin"> 
                <div>تسجيل الدخول</div>
                </Link>
                <div className="login-btn" onClick={handleSubmit}>تسجيل جديد</div>
                <p className="forget-pass-admin">نسيت كلمة المرور؟</p>
            </div>

      
        
    );
}
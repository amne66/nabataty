import { getAuth } from 'firebase/auth';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown, IoIosCart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { cartArr } from './checkout';
import { signOut } from 'firebase/auth';
// import { auth } from '../firebaseSetup';
export function Nav(){
  
  const auth = getAuth();
  const user = auth.currentUser;
  const quantity = cartArr.length;
 const test =user?.email
  const am =  test === undefined
  console.log(am)
  console.log(user?.email)
  const quantityClasses = quantity!==0  ? 'quantity-nav display' : 'hide';
  const gg = am  ? 'login-btn-nav display' : 'hide';
  const aa = am  ? 'hide' : 'login-btn-nav display';
  const logout = async () => {
    await signOut(auth);
  };

  let sum = 0;
  for (let i = 0; i < cartArr.length; i++) {
      sum += cartArr[i].price;}    
  return <>
    <nav>
      <Link to={'/'}><img className="logo-nav" src="https://nabataty.com/store/wp-content/uploads/2021/06/Nabataty-LogoAsset-3.png.webp" alt="logo" /></Link>
      <div className='search-box'>
      <input type="text" className='search-input' placeholder="ابحث في المتجر"/>
      <div className="search-icon"><FiSearch/></div>
      </div>
      <div className='login-cart-btns'>
        <Link to={'/login'} className='noLine grey7'><div className={gg}>تسجيل الدخول </div></Link>
      <Link to={'/offers'} className='noLine grey7'><div onClick={logout} className={aa}>تسجيل الخروج</div></Link>
      <Link to={'/profile'} className='noLine grey7'><div onClick={logout} className={aa}> حسابي</div></Link>

        <div className="line-nav"> </div>
        <Link to={'/cart'} className="noLine grey7"><div className='cart-nav'>{sum}ر.س<IoIosCart size={20}/></div></Link>
        <div className={quantityClasses}>{quantity}</div>
      </div>
    </nav>
    <div className='bottom-nav'>
       <div className="dropdown-nav">
       <p className="dropbtn-nav">النباتات <IoIosArrowDown /></p>
       <div className="dropdown-content-nav">
       <Link to={'/indoorplant'} className="noLine" ><p className='green'>النباتات الداخلية</p></Link>
       <Link to={'/outdoorplant'} className="noLine"><p className='green'>النباتات الخارجية</p></Link>
       </div>
       </div>
       <Link to={'/agricultural'} className='bottom-nav noLine'><p>مستلزمات زراعية </p></Link>
       <Link to={'/pots'} className='bottom-nav noLine'><p>احواض نباتات</p></Link>
       <Link to={'/offers'} className='bottom-nav noLine'><p>عروض الصيف</p></Link>
      </div>
    </>
}        

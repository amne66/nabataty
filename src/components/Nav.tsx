import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown, IoIosCart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { cartArr } from '../data/cart';

export function Nav(){
  const quantity = cartArr.length;
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
        <Link to={'/login'} className='noLine grey7'><div className="login-btn-nav">تسجيل الدخول </div></Link>
        <div className="line-nav"> </div>
        <Link to={'/cart'} className="noLine grey7"><div className='cart-nav'>{sum}ر.س<IoIosCart size={20}/></div></Link>
        <div className='quantity-nav'>{quantity}</div>
      </div>
    </nav>
    <div className='bottom-nav'>
       <div className="dropdown-nav">
       <p className="dropbtn-nav">النباتات <IoIosArrowDown /></p>
       <div className="dropdown-content-nav">
       <Link to={'/indoorplant'} className="noLine" ><p>النباتات الداخلية</p></Link>
       <Link to={'/outdoorplant'} className="noLine"><p>النباتات الخارجية</p></Link>
       </div>
       </div>
       <Link to={'/agricultural'} className='bottom-nav noLine'><p>مستلزمات زراعية </p></Link>
       <Link to={'/pots'} className='bottom-nav noLine'><p>احواض نباتات</p></Link>
       <p>عروض الصيف</p>
      </div>
    </>
}        

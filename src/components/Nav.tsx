import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown, IoIosCart } from 'react-icons/io';

export function Nav(){
    return <>
    <nav>
      <img className="logo-nav" src="https://nabataty.com/store/wp-content/uploads/2021/06/Nabataty-LogoAsset-3.png.webp" alt="logo" />
      <div className='search-box'>
      <input type="text" className='search-input' placeholder="ابحث في المتجر"/>
      <div className="search-icon"><FiSearch/></div>
      </div>
      <div className='login-cart-btns'>
        <div className="login-btn-nav">تسجيل الدخول </div>
        <div className="line-nav"> </div>
        <div className='cart-nav'>ر.س <IoIosCart size={20}/></div>
      </div>
    </nav>
    <div className='bottom-nav'>
       <div className="dropdown-nav">
       <p className="dropbtn-nav">النباتات <IoIosArrowDown /></p>
       <div className="dropdown-content-nav">
       <p>النباتات الداخلية</p>
       <p>النباتات الخارجية</p>
       </div>
       </div>
       <p>مستلزمات زراعية </p>
       <p>احواض نباتات</p>
       <p>عروض الصيف</p>
      </div>
    </>
}
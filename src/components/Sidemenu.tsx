import { Link } from "react-router-dom";

export function Sidemenu(){
return <>
<div className="side-menu-container">
 <Link to={'/indoorplant'} className='sidemenu-text noLine'> النباتات</Link>
 <Link to={'/agricultural'} className='sidemenu-text noLine'> مستلزمات زراعية</Link>
 <Link to={'/pots'} className='sidemenu-text noLine'>احواض نباتات</Link>
 <Link to={'/'} className='sidemenu-text noLine'>عروض الصيف</Link>

 {/* <div className="sidemenu-text">النباتات</div>
 <div className="sidemenu-text">مستلزمات زراعية</div>
 <div className="sidemenu-text">احواض نباتات</div>
 <div className="sidemenu-text">عروض الصيف</div> */}
</div>
</>
}
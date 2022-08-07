import { Link } from "react-router-dom";

export function Sidemenu(){
return <>
<div className="side-menu-container">
 <Link to={'/indoorplant'} className='sidemenu-text noLine'> النباتات</Link>
 <Link to={'/agricultural'} className='sidemenu-text noLine'> مستلزمات زراعية</Link>
 <Link to={'/pots'} className='sidemenu-text noLine'>احواض نباتات</Link>
 <Link to={'/offers'} className='sidemenu-text noLine'>عروض الصيف</Link>
</div>
</>
}
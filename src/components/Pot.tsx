import { Link } from "react-router-dom";
import { IPots } from "../data/pots";
import { OutdoorPlantPage } from "../pages/outdoorPlant";

interface IPOtProps {
	pot: IPots;
}
export function Pot({pot}:IPOtProps){
    return<>
    <Link to={`/pootdetails/${pot.id}`} className='noLine'>   <div className="product-card">
     <img className="product-image" src={pot.imageUrl} alt="" />
      <p className="plant-name">{pot.name}</p>
    <div className="product-info">
     <div className="product-price"> {pot.price}ر.س شامل الضريبة </div>
     <Link to={`/cart/${'pot'}/${pot.id}`} className='noLine'><div className="add-to-cart-btn">إضافة للسلة</div> </Link>
    </div>
    </div></Link>
    </>
}

// 


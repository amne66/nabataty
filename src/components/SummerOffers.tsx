import { Link } from "react-router-dom";
import { IOffer } from "../data/summerOffers";

interface IOfferstProps {
	offer: IOffer;
}
export function SummerOffers({offer}:IOfferstProps){
    return<>
    <Link to={`/pootdetails/${offer.id}`} className='noLine'>   <div className="product-card">
     <img className="product-image" src={offer.imageUrl} alt="" />
      <p className="plant-name">{offer.name}</p>
    <div className="product-info">
     <div className="product-price line"> {offer.oldPrice}ر.س شامل الضريبة </div>
     <div className="product-price"> {offer.newPrice}ر.س شامل الضريبة </div>
     <Link to={`/cart/${'offer'}/${offer.id}`} className='noLine'><div className="add-to-cart-btn">إضافة للسلة</div> </Link>
    </div>
    </div></Link>
    </>
}



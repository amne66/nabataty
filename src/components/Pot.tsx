import { IPots } from "../data/pots";

interface IPOtProps {
	pot: IPots;
}
export function Pot({pot}:IPOtProps){
    return<>
    <div className="product-card">
     <img className="product-image" src={pot.imageUrl} alt="" />
      <p className="plant-name">{pot.name}</p>
    <div className="product-info">
     <div className="product-price"> {pot.price}ر.س شامل الضريبة </div>
     <div className="add-to-cart-btn">إضافة للسلة</div>
    </div>
    </div>
    </>
}
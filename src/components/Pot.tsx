import { Link } from "react-router-dom";
import { IPots } from "../data/pots";
import { OutdoorPlantPage } from "../pages/outdoorPlant";

interface IPOtProps {
	pot: IPots;
}
export function Pot({pot}:IPOtProps){
  const sayHello = (id:any) => {
   return <OutdoorPlantPage />
  };
    return<>
    <Link to={'/agricultural'} className='bottom-nav'>   <div className="product-card">
     <img className="product-image" src={pot.imageUrl} alt="" />
      <p className="plant-name">{pot.name}</p>
    <div className="product-info">
     <div className="product-price"> {pot.price}ر.س شامل الضريبة </div>
     <div className="add-to-cart-btn">إضافة للسلة</div>
    </div>
    </div></Link>

    </>
}
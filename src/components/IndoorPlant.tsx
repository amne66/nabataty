import { Link } from "react-router-dom";
import { Iplant } from "../data/indoorPlant";
import { Pot } from "./Pot";

interface InPlantProps {
	plant: Iplant;
}
export function IndoorPLant({plant}:InPlantProps){
    return<>
    <Link to={`/indoordetails/${plant.id}`} >
    <div className="product-card">
     <img className="product-image" src={plant.imageUrl} alt="" />
      <p className="plant-name">{plant.name}</p>
    <div className="product-info">
     <div className="product-price"> {plant.price}ر.س شامل الضريبة </div>
     <div className="add-to-cart-btn">إضافة للسلة</div>
    </div>
    </div>
    </Link>

    </>
}
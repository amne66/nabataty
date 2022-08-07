import { Link } from "react-router-dom";
import { IOutdoorPlant } from "../data/outdoorPlant";

interface OutPlantProps {
	plant: IOutdoorPlant;
}
export function OutdoorPLant({plant}:OutPlantProps){
    return<>
    <Link className="product-card noLine" to={`/outoordetails/${plant.id}`} >
    <div>
     <img className="product-image" src={plant.imageUrl} alt="" />
      <p className="plant-name">{plant.name}</p>
    <div className="product-info">
     <div className="product-price"> {plant.price}ر.س شامل الضريبة </div>
     <Link to={`/cart/${'outdoor'}/${plant.id}`} className='noLine'><div className="add-to-cart-btn">إضافة للسلة</div> </Link>
    </div>
    </div>
    </Link>
    </>
}


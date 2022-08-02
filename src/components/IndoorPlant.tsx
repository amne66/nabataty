import { Iplant } from "../data/indoorPlant";

interface InPlantProps {
	plant: Iplant;
}
export function IndoorPLant({plant}:InPlantProps){
    return<>
    <div className="product-card">
     <img className="product-image" src={plant.imageUrl} alt="" />
      <p className="plant-name">{plant.name}</p>
    <div className="product-info">
     <div className="product-price"> {plant.price}ر.س شامل الضريبة </div>
     <div className="add-to-cart-btn">إضافة للسلة</div>
    </div>
    </div>
    </>
}
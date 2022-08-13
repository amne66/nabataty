import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IOutdoorPlant } from "../data/outdoorPlant";
import { db } from "../firebaseSetup";

interface OutPlantProps {
	data: IOutdoorPlant;
  id:string;
}
export function OutdoorPLant(){
  const [plantt, setplant] = useState([]);
  const indoorPlantRef = collection(db, "outdoorPlant");
  useEffect(() => {
    onSnapshot(indoorPlantRef, (querySnapshot:any) => {
      setplant(querySnapshot.docs.map((doc: { id: any; data: () => any; }) => ({
        id: doc.id,
        data: doc.data() 
      })))
    })
  },[])
    return<>
  <div className="products-grid">
  {plantt.map((outPlant : OutPlantProps) => (
    <Link className="noLine" to={`/outoordetails/${outPlant.id}`} >
    <div className="product-card">
     <img className="product-image" src={outPlant.data.imageUrl} alt="" />
      <p className="plant-name">{outPlant.data.name}</p>
    <div className="product-info">
     <div className="product-price"> {outPlant.data.price}ر.س شامل الضريبة </div>
     <Link to={`/cart/${'outdoor'}/${outPlant.id}`} className='noLine'><div className="add-to-cart-btn">إضافة للسلة</div> </Link>
    </div>
    </div>
    </Link>
    ))}

    </div>

    </>
}


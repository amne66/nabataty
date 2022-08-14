import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Iplant } from "../data/indoorPlant";
import { db } from "../firebaseSetup";

interface InPlantProps {
	data: Iplant; 
  id:String;
}
export function IndoorPLant(){
  const [plantt, setplant] = useState([]);
  const indoorPlantRef = collection(db, "indoorPlant");
  
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

{plantt.map((inPlant : InPlantProps) => (
  <Link to={`/indoordetails/${inPlant.id}`}  className='noLine'>
    <div className="product-card">
     <img className="product-image" src={inPlant.data.imageUrl} alt="" /> 
      <p className="plant-name">{inPlant.data.name}</p>
    <div className="product-info">
     <div className="product-price" >{inPlant.data.price}ر.س شامل الضريبة </div>
     <Link to={`/cart/${'indoor'}/${inPlant.id}`} className='noLine'><div className="add-to-cart-btn">إضافة للسلة</div> </Link>
    </div>
    </div> 
    </Link>
    ))}
</div>
    </>
    }
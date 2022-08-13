import { Link } from "react-router-dom";
import { IPots } from "../data/pots";
import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebaseSetup";


interface IPOtProps {
	data: IPots;
  id:String;
}
export function Pot(){
  const [pot, setPot] = useState([]);
  const potRef = collection(db, "post");
  useEffect(() => {
    onSnapshot(potRef, (querySnapshot:any) => {
      setPot(querySnapshot.docs.map((doc: { id: any; data: () => any; }) => ({
        id: doc.id,
        data: doc.data() 
      })))
    })
  },[])
    return<>
    <div className="products-grid">

   {pot.map((pot : IPOtProps) => (
    <Link to={`/pootdetails/${pot.id}`} className='noLine'>   <div className="product-card">
     <img className="product-image" src={pot.data.imageUrl} alt="" />
      <p className="plant-name">{pot.data.name}</p>
    <div className="product-info">
     <div className="product-price"> {pot.data.price}ر.س شامل الضريبة </div>
     <Link to={`/cart/${'pot'}/${pot.id}`} className='noLine'><div className="add-to-cart-btn">إضافة للسلة</div> </Link>
    </div>
    </div></Link>
    ))}
</div>
    </>
}



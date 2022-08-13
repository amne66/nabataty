import { collection, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IOffer } from "../data/summerOffers";
import { db } from "../firebaseSetup";


interface IOfferstProps {
	data: IOffer;
  id:string;
}
export function SummerOffers(){
  const [offer, setOffer] = useState([]);
  const offerRef = collection(db, "summerOffers");
  useEffect(() => {
    onSnapshot(offerRef, (querySnapshot:any) => {
      setOffer(querySnapshot.docs.map((doc: { id: any; data: () => any; }) => ({
        id: doc.id,
        data: doc.data() 
      })))
    })
  },[])
    return<>
    <div className="products-grid">

   {offer.map((offer : IOfferstProps) => ( 
    // <Link to={`/pootdetails/${offer.id}`} className='noLine'> 
      <div className="product-card">
     <img className="product-image" src={offer.data.imageUrl} alt="" />
      <p className="plant-name">{offer.data.name}</p>
    <div className="product-info">
     <div className="product-price line"> {offer.data.oldPrice}ر.س شامل الضريبة </div>
     <div className="product-price"> {offer.data.newPrice}ر.س شامل الضريبة </div>
     <Link to={`/cart/${'offer'}/${offer.id}`} className='noLine'><div className="add-to-cart-btn">إضافة للسلة</div> </Link>
    </div>
    </div>
    //</Link>
       ))}
       </div>
    </>
}



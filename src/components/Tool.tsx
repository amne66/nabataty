import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ITools } from "../data/tools";
import { db } from "../firebaseSetup";

interface IToolProps {
	data: ITools;
  id:string;
}
export function Tool(){
  const [tool, setTool] = useState([]);
  const indoorPlantRef = collection(db, "tools");
  useEffect(() => {
    onSnapshot(indoorPlantRef, (querySnapshot:any) => {
      setTool(querySnapshot.docs.map((doc: { id: any; data: () => any; }) => ({
        id: doc.id,
        data: doc.data() 
      })))
    })
  },[])
    return<>
    <div className="products-grid">

    {tool.map((tool : IToolProps) => (
    <Link to={`/tooldetails/${tool.id}`} className='noLine'>
    <div className="product-card">
     <img className="product-image" src={tool.data.imageUrl} alt="" />
      <p className="plant-name">{tool.data.name}</p>
    <div className="product-info">
     <div className="product-price"> {tool.data.price}ر.س شامل الضريبة </div>
     <Link to={`/cart/${'tool'}/${tool.id}`} className='noLine'><div className="add-to-cart-btn">إضافة للسلة</div> </Link>
    </div>
    </div>
    </Link>
    ))}
    </div>
    </>
}       



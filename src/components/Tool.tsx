import { Link } from "react-router-dom";
import { ITools } from "../data/tools";

interface IToolProps {
	tool: ITools;
}
export function Tool({tool}:IToolProps){
    return<>
    <Link to={`/tooldetails/${tool.id}`} className='noLine'>
    <div className="product-card">
     <img className="product-image" src={tool.imageUrl} alt="" />
      <p className="plant-name">{tool.name}</p>
    <div className="product-info">
     <div className="product-price"> {tool.price}ر.س شامل الضريبة </div>
     <Link to={`/cart/${'tool'}/${tool.id}`} className='noLine'><div className="add-to-cart-btn">إضافة للسلة</div> </Link>
    </div>
    </div>
    </Link>
    </>
}       



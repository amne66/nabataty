import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import { Nav } from "../components/Nav";
import { toolsArr } from "../data/tools";

export function ToolDetailPage(){
    const params:any = useParams();
    const searchIndex = toolsArr.find((tool) => tool.id === params.id); 
      let name = '' ;
      let price= 0;
      let description= '';
      let imageUrl='';
     if(searchIndex){
        name = searchIndex.name;
        price=searchIndex.price;
        description=searchIndex.description;
        imageUrl=searchIndex.imageUrl;
    }
return <>
<Nav></Nav>
  <div className="plant-details-container">
    <div ><img className="plant-image-details" src={imageUrl} alt="" /></div>
    <div className="plant-details">
        <h1>{name}</h1>
         <div className="grey-details">{description}</div>
        <div className="product-price-details"> {price}ر.س شامل الضريبة </div>
        <div className="add-to-cart-details">إضافة للسلة</div>
    </div>
   </div>
   <hr />
   <div className="details-h3">الوصف</div>
  <div className="plant-des-details">
    <img className="image-desc-details" src={imageUrl} alt="" />
    <p className="details-desc">{description}</p>
  </div>
  <Footer></Footer>
</>
}
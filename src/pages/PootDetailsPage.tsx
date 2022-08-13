import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import { Nav } from "../components/Nav";
import { potsArr } from "../data/pots";

export function PootDetailsPage(){
    const params:any = useParams();
    const searchIndex = potsArr.find((poot) => poot.id === params.id); 
      let name = '' ;
      let price= 0;
      let description= '';
      let imageUrl='';
      let id;
     if(searchIndex){
        name = searchIndex.data.name;
        price=searchIndex.data.price;
        description=searchIndex.data.description;
        imageUrl=searchIndex.data.imageUrl;
        id = searchIndex.id;
    }
return <>
<Nav></Nav>
  <div className="plant-details-container">
    <div ><img className="plant-image-details" src={imageUrl} alt="" /></div>
    <div className="plant-details">
        <h1>{name}</h1>
         <div className="grey-details">{description}</div>
        <div className="product-price-details"> {price}ر.س شامل الضريبة </div>
        <Link to={`/cart/${'pot'}/${id}`} className='noLine'><div className="add-to-cart-details">إضافة للسلة</div> </Link>
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
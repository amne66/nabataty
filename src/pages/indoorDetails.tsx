import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import { Layout } from "../components/Layout";
import { Nav } from "../components/Nav";
import { iPlants } from "../data/indoorPlant";

export function IndoorDetailsPage(){
    const params:any = useParams();
    const searchIndex = iPlants.find((plant) => plant.id === params.id); 
      let name = '' ;
      let price= 0;
      let watering= '';
      let lighting= '';
      let temperature= '';
      let description= '';
      let imageUrl='';
     if(searchIndex){
        name = searchIndex.name;
        price=searchIndex.price;
        watering=searchIndex.watering;
        lighting =searchIndex.lighting;
        temperature=searchIndex.temperature;
        description=searchIndex.description;
        imageUrl=searchIndex.imageUrl;
    }
return <>
<Nav></Nav>
  <div className="plant-details-container">
    <div ><img className="plant-image-details" src={imageUrl} alt="" /></div>
    <div className="plant-details">
        <h1>{name}</h1>
        <div className="plant-care-details">
            <img className="plant-img-info" src="https://www.nabataty.com/store/wp-content/uploads/2020/07/watering.png" alt="" />
            <div className="details-flex">
            <h4> الري</h4>
            <p>{watering}</p>
            </div>
        </div>
        <div className="plant-care-details">
        <img className="plant-img-info" src="https://www.nabataty.com/store/wp-content/uploads/2020/07/light.png" alt="" />
            <div className="details-flex">
            <h4> الاضاءة</h4>
            <p>{lighting}</p>
            </div>
        </div>
        <div className="plant-care-details">
        <img className="plant-img-info"  src="https://www.nabataty.com/store/wp-content/uploads/2020/07/heat.png" alt="" />
            <div className="details-flex">
            <h4> درجة الحرارة</h4>
            <p>{temperature}</p>
            </div>
        </div>
        <div className="product-price"> {price}ر.س شامل الضريبة </div>
        <div className="add-to-cart-btn">إضافة للسلة</div>
    </div>
   </div>
   <h3>الوصف</h3>
  <div className="plant-des-details">
    <img className="image-desc-details" src={imageUrl} alt="" />
    <p>{description}</p>
  </div>
  <Footer></Footer>
</>
     
}
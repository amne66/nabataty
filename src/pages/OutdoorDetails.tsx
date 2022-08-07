import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import { Nav } from "../components/Nav";
import { oPlants } from "../data/outdoorPlant";

export function OutdoorDetailsPage(){
    const params:any = useParams();
    const searchIndex = oPlants.find((plant) => plant.id === params.id); 
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
            <p className="black-details">الري</p>
            <p className="grey-details">{watering}</p>
            </div>
        </div>
        <div className="plant-care-details">
        <img className="plant-img-info" src="https://www.nabataty.com/store/wp-content/uploads/2020/07/light.png" alt="" />
            <div className="details-flex">
            <p className="black-details">الاضاءة</p>
            <p className="grey-details">{lighting}</p>
            </div>
        </div>
        <div className="plant-care-details">
        <img className="plant-img-info"  src="https://www.nabataty.com/store/wp-content/uploads/2020/07/heat.png" alt="" />
            <div className="details-flex">
            <p className="black-details">درجة الحرارة</p>
            <p className="grey-details">{temperature}</p>
            </div>
        </div>
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
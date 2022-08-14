import { Link, useParams } from "react-router-dom";
import ViewCart from "../components/cart";
import { cartArr, ICart } from "../components/checkout";
import Footer from "../components/footer";
import { Nav } from "../components/Nav";
import { iPlants } from "../data/indoorPlant";
import { oPlants } from "../data/outdoorPlant";
import { potsArr } from "../data/pots";
import { iOffers } from "../data/summerOffers";
import { toolsArr } from "../data/tools";


export function ViewCartPage(){
  let sum = 0;
    for (let i = 0; i < cartArr.length; i++) {
        sum += cartArr[i].price;}  
  const params:any = useParams();
  const type = params.type;
  const id = params.id;
      let name = '' ;
      let price= 0;  
      let imageUrl='';
      let idd ;
     
if(type === 'pot'){
  const searchIndex = potsArr.find((pot) => pot.id === id); 
  if(searchIndex){
    idd=searchIndex.id;
    name = searchIndex.data.name;
    price=searchIndex.data.price;
    imageUrl=searchIndex.data.imageUrl;
}
}else if(type === 'tool'){
  const searchIndex = toolsArr.find((tool) => tool.id === id); 
  if(searchIndex){
    idd=searchIndex.id;
    name = searchIndex.data.name;
    price=searchIndex.data.price;
    imageUrl=searchIndex.data.imageUrl;
}
}else if (type === 'indoor'){
  const searchIndex = iPlants.find((indoorPlant) => indoorPlant.id === id); 
  if(searchIndex){
    idd=searchIndex.id;
    name = searchIndex.data.name;
    price=searchIndex.data.price;
    imageUrl=searchIndex.data.imageUrl;
}
}else if(type ==='outdoor'){
  const searchIndex = oPlants.find((oudoorPlant) => oudoorPlant.id === id); 
  if(searchIndex){
    idd=searchIndex.id;
    name = searchIndex.data.name;
    price=searchIndex.data.price;
    imageUrl=searchIndex.data.imageUrl;
}}else if(type === 'offer'){
  const searchIndex = iOffers.find((offer) => offer.id === id); 
  if(searchIndex){
    idd=searchIndex.id;
    name = searchIndex.data.name;
    price=searchIndex.data.newPrice;
    imageUrl=searchIndex.data.imageUrl;}
}

if( name !== ''){
  cartArr.push({
    id:  idd,
    name: name,
    price: price,
    imageUrl: imageUrl,   
})}
for (let i = 0; i < cartArr.length; i++) {
  sum += cartArr[i].price;}  
  const cartDev = cartArr.map((carts: ICart) => <ViewCart cart={carts} />);
      return <div>
        <Nav></Nav>
        <div className="cart-flex">
         <div className="cart-flex-column">
         {cartDev}
        <Link to={'/'} className="continua-btn" ><div>متابعة التسوق</div></Link>
          </div> 
        <div>
        <div className="sid-cart">
<h2>إجمالي سلة المشتريات</h2>
 <div className="line-checkout"></div>
<div className="total-cart">
    <h4>المجموع</h4>
    <h5>{sum} ر.س (شامل ضريبة القيمة المضافة)</h5>
</div>
<div className="line-checkout"></div>
<div className="shinpping-cart">
<h4>الشحن</h4>
<h5>حساب تكلفة الشحن</h5>
</div>
<div className="line-checkout"></div>
<div className="final-total">
<h4>الإجمالي</h4>
<h5>{sum} ر.س (يتضمن ضريبة القيمة المضافة)</h5>
</div>

<Link to={'/Checkout'} className="cart-btn"><div >التقديم لإتمام الطلب</div></Link>
            </div>
        </div>

        </div>
        <Footer></Footer>
      </div>
}


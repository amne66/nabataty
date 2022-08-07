
// import { Link } from "react-router-dom";

import { TiDeleteOutline } from "react-icons/ti";
import { ICart } from "../data/cart";

interface ICartProps {
	cart: ICart;
}

export default function ViewCart({cart}:ICartProps) {

    return   <>
    <div className="view-cart">
    <div className="prodact-contenr">                           
<table>
  <tr>
  <td></td>
    <td>المنتج</td>
    <td>السعر</td>
    <td>الكمية</td>
    <td>المجموع</td>
  </tr>
  <tr>
  <div className="icon-delete"> < TiDeleteOutline size={30} /></div>
    <td><img className="cart-img" src={cart.imageUrl} alt="img" /></td>
    <td>{cart.price} ر.س </td>
    <td>1</td>
    <td>{cart.price} ر.س (شامل ضريبة القيمة المضافة)</td>
  </tr>
</table>
</div>        
</div>
</>
}
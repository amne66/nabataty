import { ICart } from "../data/cart"


interface ICartProps {
    cart: ICart;
}
export function OrderDetails({cart}:ICartProps){
    return <>
    <div className="checkout-title">
<h4 className="checkout-text">   {cart.name}  × 1</h4>
<h4 className="checkout-text">{cart.price} ر.س (شامل ضريبة القيمة المضافة)</h4>
</div>
    </>
}


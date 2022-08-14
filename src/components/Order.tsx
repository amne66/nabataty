

import { IOrder } from "../data/orders";



export interface IOrderProps {
    order: IOrder; 
  }

export default function ViewOrder({order}:IOrderProps) {
  
    return   <>
             <h4>{order.userEmail}</h4>
            <h4>{order.orderStaus}</h4>
</>
}
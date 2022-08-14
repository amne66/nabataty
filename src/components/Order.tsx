

import { IOrder } from "../data/orders";



export interface IOrderProps {
    order: IOrder; 
  }

export default function ViewOrder({order}:IOrderProps) {
  
    return   <>
             <h4 className="amani-order">{order.userEmail}</h4>
            <h4 className="amani-order">{order.orderStaus}</h4>
</>
}
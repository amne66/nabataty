import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import AdminDashbord from "../components/AdminPage";
import { Layout } from "../components/Layout";

import { IOrderProps, orders } from "../data/orders";


export function AdminPage(){

    const orderDev = orders.map((orders: IOrderProps) => <AdminDashbord order={orders.data} />);
    return <Layout>
       <>
        <div className="grid-order">
        <div>رقم الطلب</div>
          <div>معلومات الطلب</div>
          <div>معلومات العميل</div>
          <div>الحساب</div>
          <div>حالة الطلب</div>
        </div>
         <div className="grid-order" >
         {orderDev}
         </div>
       </>
     
    </Layout>
    
 }
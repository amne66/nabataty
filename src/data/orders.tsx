import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseSetup";

export interface IOrder {
    orderStaus:any;
    userEmail:any;
    id:string;
}
export interface IOrderProps {
  data: IOrder; 
  id:String;
}

 export let orders: IOrderProps[] = []

const orderRef = collection(db, "orders");
onSnapshot(orderRef, (querySnapshot:any) => {
    orders=(querySnapshot.docs.map((doc: { id: any; data: () => any; }) => ({
      id: doc.id,
      data: doc.data() 
    })))
  })

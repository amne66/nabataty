
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { IOrder } from '../data/orders';
import { db } from '../firebaseSetup';
export interface IOrderProps {
  order: IOrder; 
}
export default function AdminDashbord({order}:IOrderProps) {
  
  const [option,setOption] = useState()

  const orderDocRef = doc(db, 'orders', '')

  function handleChange(event:any){
      setOption(event.target.value)
  }
  let hh = option;
  console.log(hh);
  async function test(){
    try{        
      console.log(hh);
      await updateDoc(orderDocRef, {
         orderStaus: hh
       })
     } catch (err) {
       alert(err)
     } 
  }
  
  return <>
  <div className='s'>1</div>
  <div className='s'>flowers</div>
  <div className='s'>{order.userEmail}</div>
  <div className='s'>100</div>
  <select className="state"  name='option' onChange={handleChange} onClick={test}>
         <option >جاري التنفيذ</option>
         <option >جاري التوصيل</option>
         <option >تم التوصيل</option>
  </select>  </>
}


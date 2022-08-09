
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function AdminDashbord() {
  return (
    <MDBTable className='Dashbord'>
      <MDBTableHead >
        <tr >
          <th scope='col'>رقم الطلب</th>
          <th scope='col'>معلومات الطلب</th>
          <th scope='col'>معلومات العميل</th>
          <th scope='col'>الحساب</th>
          <th scope='col'>حالة الطلب</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody className='table-Dashbord'>
        <tr>
          <th scope='row'>1</th>
          <td>بوتس في اصيص فخاري ٢</td>
          <td>اماني</td>
          <td>١٥٠ ريال</td>
          <td><select className="state" >
         <option >جاري التنفيذ</option>
         <option >جاري التوصيل</option>
         <option >تم التوصيل</option>
  </select></td>
        </tr>
        <tr>
          <th scope='row'>2</th>
        </tr>
        <tr>
          <th scope='row'>3</th>
         
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}


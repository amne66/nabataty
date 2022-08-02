import { IndoorPlants } from "../components/IndoorPlants";
import { Layout } from "../components/Layout";
import { Sidemenu } from "../components/Sidemenu";

export function IndoorPlantPage(){
    return <>
    <Layout>
   <div className="grey-back">
    <div className="display-products">
        <Sidemenu />
       <div className="column-flex">
       <p className="indoor-plant-des">اضف لمسة جمال طبيعية لمكانك! من خلال مجموعة منوعة من نباتات الزينة الداخلية المجهزة في مراكن واحواض بالاضافة لنباتات داخلية كبيرة وصغيرة مزهرة</p>   
        <IndoorPlants />
       </div>
    </div>
   </div>
    </Layout>
    </>
    
}
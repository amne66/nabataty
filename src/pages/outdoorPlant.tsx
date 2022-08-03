import { Layout } from "../components/Layout";
import { OutdoorPLants } from "../components/outdoorPlants";
import { Sidemenu } from "../components/Sidemenu";

export function OutdoorPlantPage(){    
    return <>
    <Layout>
   <div className="grey-back">
    <div className="display-products">
        <Sidemenu />
       <div className="column-flex">
       <p className="indoor-plant-des"> مجموعة متنوعة من النباتات الخارجية التي يمكن استخدامها في الاماكن المفتوحة مثل حديقة المنزل او حول اسوار ومداخل المنزل</p>   
        <OutdoorPLants />
       </div>
    </div>
   </div>
    </Layout>
    </>
}
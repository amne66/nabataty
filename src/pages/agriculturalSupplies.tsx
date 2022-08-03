import { Layout } from "../components/Layout";
import { Sidemenu } from "../components/Sidemenu";
import { Tools } from "../components/Tools";

export function AgriculturalSupplies(){   
    return <>
    <Layout>
   <div className="grey-back">
    <div className="display-products">
        <Sidemenu />
       <div className="column-flex">
       <p className="indoor-plant-des"> مستلزمات زراعية متنوعة مثل ادوات الري والحديقة والتربة الزراعية بكل انواعها والاسمدة المختلفة بالاضافة للاكسوارات الخاصة بالنباتات الداخلية والخارجية</p>   
        <Tools />
       </div>
    </div>
   </div>
    </Layout>
    </>
}
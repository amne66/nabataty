import { Layout } from "../components/Layout";
import { Pots } from "../components/Pots";
import { Sidemenu } from "../components/Sidemenu";

export function PotsPage(){ 
    return <>
    <Layout>
   <div className="grey-back">
    <div className="display-products">
        <Sidemenu />
       <div className="column-flex">
       <p className="indoor-plant-des">مراكن و احواض مختلفة الاشكال والاحجام والمزايا، تشكيلة منوعة تناسب مختلف الاذواق</p>   
        <Pots />
       </div>
    </div>
   </div>
    </Layout>
    </>
}
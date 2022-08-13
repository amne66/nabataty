import { Layout } from "../components/Layout";
import { Sidemenu } from "../components/Sidemenu";
import { SummerOffers } from "../components/SummerOffers";

export function SummerOfferPage(){


    return <Layout>
<div className="grey-back">
 <div className="display-products">
     <Sidemenu />
    <div className="column-flex">
    <div className="products-grid padding">
   <SummerOffers />
    </div>    </div>
 </div>
</div>
 </Layout>
}


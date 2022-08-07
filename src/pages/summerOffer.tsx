import { Layout } from "../components/Layout";
import { Sidemenu } from "../components/Sidemenu";
import { SummerOffers } from "../components/SummerOffers";
import { iOffers } from "../data/summerOffers";

export function SummerOfferPage(){

    const offersDev = iOffers.map((offer) => <SummerOffers offer={offer} />);

    return <Layout>
<div className="grey-back">
 <div className="display-products">
     <Sidemenu />
    <div className="column-flex">
    <div className="products-grid padding">
     {offersDev}
    </div>    </div>
 </div>
</div>
 </Layout>
}


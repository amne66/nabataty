import { potsArr } from "../data/pots";
import { Pot } from "./Pot";


export function Pots(){
    const potDev = potsArr.map((pott) => <Pot />);
    return<>
    <div className="products-grid" >
     {potDev}
    </div>
    </>
}
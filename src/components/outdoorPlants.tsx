import { oPlants } from "../data/outdoorPlant";
import { OutdoorPLant } from "./outdoorPlant";


export function OutdoorPLants(){
    const outPlantDev = oPlants.map((oPlant) => <OutdoorPLant />);
    return<>
    <div className="products-grid">
     {outPlantDev}
    </div>
    </>
}
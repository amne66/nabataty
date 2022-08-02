import { iPlants } from "../data/indoorPlant";
import { IndoorPLant } from "./IndoorPlant";


export function IndoorPlants(){
    const iPlantDev = iPlants.map((iPlant) => <IndoorPLant plant={iPlant} />);
    return<>
    <div className="products-grid">
     {iPlantDev}
    </div>
    </>
}
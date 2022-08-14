import { toolsArr } from "../data/tools";
import { Tool } from "./Tool";


export function Tools(){
    const toolsDev = toolsArr.map((tooll) => <Tool />);
    return<>
    <div className="products-grid">
     {toolsDev}
    </div>
    </>
}
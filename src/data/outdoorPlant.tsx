import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseSetup";

export interface IOutdoorPlant {
	id: string;
    name: string;
	price: number;
	watering: string;
	lighting: string;
	temperature: string;
	description: string;
    imageUrl:string;
}
interface OutPlantProps {
	data: IOutdoorPlant;
  id:string;
}
export let oPlants: OutPlantProps[] = [];
const outRef = collection(db, "outdoorPlant");
onSnapshot(outRef, (querySnapshot:any) => {
    oPlants=(querySnapshot.docs.map((doc: { id: any; data: () => any; }) => ({
      id: doc.id,
      data: doc.data() 
    })))
  })


//     {
//     id: '1',
//     name: ' شتلة زيتون اوروبي',
// 	price: 95,
// 	watering: 'لا يتم ريها إلا بعد جفاف التربة' ,
// 	lighting:' تحتاج ضوء ساطع إلى متوسط مرشح مثل ضوء النافذة أو الانارة الصناعية للغرفة.',
// 	temperature: 'تحتاج إلى جو معتدل يناسبها درجة حرارة الغرفة الطبيعية، والجو الدافئ حتى 35 درجة مئوية.',
// 	description: 'شتلة زيتون اوروبي',
//     imageUrl:'https://nabataty.com/store/wp-content/uploads/2021/11/3367-768x768.jpg',
//     },
//     {
//     id: '2',
//     name: 'شجرة كمكوات كبيرة مثمرة',
// 	price:361 ,
// 	watering: 'لا يتم ريها إلا بعد جفاف التربة جزئياً مع المحافظة على رطوبتها، ويفضل رش أوراقها برذاذ الماء باستمرار كونها محبة للرطوبة.',
// 	lighting: 'تحتاج ضوء ساطع مرشح مثل ضوء النافذة او الانارة الصناعية داخل الغرفة.',
// 	temperature: 'تحتاج إلى جو معتدل ويناسبها درجة حرارة الغرفة الطبيعية وتتحمل الجو الدافئ حتى 30 درجة مئوية.',
// 	description: 'شجرة كمكوات كبيرة مثمرة',
//     imageUrl:'https://nabataty.com/store/wp-content/uploads/2021/03/2102-768x768.jpg',
//     },
//     {
//     id: '3',
//     name: 'اوليفيرا كبيرة',
// 	price: 160,
// 	watering: 'لا يتم ريها إلا بعد جفاف التربة جزئياً مع المحافظة على رطوبتها، ويفضل رش أوراقها برذاذ الماء باستمرار كونها محبة للرطوبة.',
// 	lighting: 'تحتاج ضوء ساطع مرشح مثل ضوء النافذة او الانارة الصناعية داخل الغرفة.',
// 	temperature: 'تحتاج إلى جو معتدل ويناسبها درجة حرارة الغرفة الطبيعية وتتحمل الجو الدافئ حتى 30 درجة مئوية.',
// 	description: 'اوليفيرا كبيرة',
//     imageUrl:'https://nabataty.com/store/wp-content/uploads/2021/03/2100-768x768.jpg',
//     },
//     {
//     id: '4',
//     name: 'ابورو صبار معلق',
// 	price: 231,
// 	watering: 'لا يتم ريها إلا بعد جفاف التربة جزئياً مع المحافظة على رطوبتها، ويفضل رش أوراقها برذاذ الماء باستمرار كونها محبة للرطوبة.',
// 	lighting: 'تحتاج ضوء ساطع مرشح مثل ضوء النافذة او الانارة الصناعية داخل الغرفة.',
// 	temperature: 'تحتاج إلى جو معتدل ويناسبها درجة حرارة الغرفة الطبيعية وتتحمل الجو الدافئ حتى 30 درجة مئوية.',
// 	description: 'ابورو صبار معلق',
//     imageUrl:'https://nabataty.com/store/wp-content/uploads/2020/10/1584-768x768.jpg',
//     }
// ]
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

export const oPlants: IOutdoorPlant[] = [

    {
    id: '123',
    name: 'اوليفيرا كبيرة	',
	price: 46,
	watering: '',
	lighting: '',
	temperature: '',
	description: '',
    imageUrl:'https://nabataty.com/store/wp-content/uploads/2021/11/3367-768x768.jpg',
    },
    {
    id: '123',
    name: 'ابورو صبار معلق',
	price: 86,
	watering: '',
	lighting: '',
	temperature: '',
	description: '',
    imageUrl:'https://nabataty.com/store/wp-content/uploads/2021/03/2102-768x768.jpg',
    },
    {
    id: '123',
    name: 'نبتة جلد النمر صغيرة	',
	price: 30,
	watering: '',
	lighting: '',
	temperature: '',
	description: '',
    imageUrl:'https://nabataty.com/store/wp-content/uploads/2021/03/2100-768x768.jpg',
    },
    {
    id: '123',
    name: 'شجرة كمكوات كبيرة مثمرة	',
	price: 361,
	watering: '',
	lighting: '',
	temperature: '',
	description: '',
    imageUrl:'https://nabataty.com/store/wp-content/uploads/2020/10/1584-768x768.jpg',
    }
]
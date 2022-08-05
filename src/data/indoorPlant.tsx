export interface Iplant {
	id: string;
    name: string;
	price: number;
	watering: string;
	lighting: string;
	temperature: string;
	description: string;
    imageUrl:string;
}

export const iPlants: Iplant[] = [
	{
	id: '1',
    name: 'بوتس في اصيص فخاري',
	price: 69,
	watering: 'لا يتم ريها إلا بعد جفاف التربة جزئياً مع المحافظة على رطوبتها، ويفضل رش أوراقها برذاذ الماء باستمرار كونها محبة للرطوبة.',
	lighting: 'تحتاج ضوء ساطع مرشح مثل ضوء النافذة او الانارة الصناعية داخل الغرفة.',
	temperature: 'تحتاج إلى جو معتدل ويناسبها درجة حرارة الغرفة الطبيعية وتتحمل الجو الدافئ حتى 30 درجة مئوية.',
	description: 'بوتس في اصيص فخاري ،تعتبر البوتس (Epipremnum aureum) النباتات الداخلية القوية والناجحة جداً، تتميز بلون جميل وتمتد بشكل سريع نسبياً ولاتحتاج للكثير من العناية، يمكن وضعها في دورات المياة أو في غرف الجلوس أو المكاتب.',
    imageUrl:'https://nabataty.com/store/wp-content/uploads/2022/08/10266-768x768.jpg',
	},
	{
	id: '22',
    name: 'نبتة جلد النمر في اصيص خوص اسمنتي مجدول',
	price: 149,
	watering: '',
	lighting: '',
	temperature: '',
	description: '',
    imageUrl:'https://nabataty.com/store/wp-content/uploads/2021/08/3159-768x768.jpg',
	},
	{
	id: '44',
    name: 'ميني تشامادوريا في اصيص سيراميك ملون',
	price: 58,
	watering: '',
	lighting: '',
	temperature: '',
	description: '',
    imageUrl:'https://nabataty.com/store/wp-content/uploads/2022/07/10261-768x768.jpg',
	},
	{
	id: '55',
    name: 'دراسينا دورادو في اصيص سيراميك رمادي فاتح',
	price: 196,
	watering: '',
	lighting: '',
	temperature: '',
	description: '',
    imageUrl:'https://nabataty.com/store/wp-content/uploads/2022/07/10263-768x768.jpg',
	},
	{
	id: '6',
    name: 'فيلوديندرون بيركين في اصيص سيراميك ملون',
	price: 99,
	watering: '',
	lighting: '',
	temperature: '',
	description: '',
    imageUrl:'https://nabataty.com/store/wp-content/uploads/2022/07/10257-768x768.jpg',
	},
	{
	id: '7',
    name: 'ببروميا في اصيص سيراميك صغير	',
	price: 52,
	watering: '',
	lighting: '',
	temperature: '',
	description: '',
    imageUrl:'https://nabataty.com/store/wp-content/uploads/2022/07/10249-768x768.jpg',
	}
]

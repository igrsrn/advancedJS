const albums = [
	{
		title: 'newAlbum1',
		author: 'Singer1',
		year: 2000
	},
	{
		title: 'newAlbum2',
		author: 'Singer2',
		year: 2001
	},
	{
		title: 'newAlbum3',
		author: 'Singer3',
		year: 2002
	}
];

const musicCollection = {
	albums: [...albums]
};

musicCollection[Symbol.iterator] = function() {
		let countAlbums = 0;
		return {

			next() {
				if (countAlbums < albums.length) {
					return {
						value: albums[countAlbums++],
						done: false
					}
				} else {
					return {
						done: true
					}
				}
			}
		}
}

for (let item of musicCollection) {
	console.log(`Название альбома ${item.title} - ${item.author}(${item.year})`);
}



const employeesSpecialization = new Map();
employees.set('Виктор', 'пицца')
	.set('Ольга', 'Суши')
	.set('Дмитрий', 'десерты');


const employeesDishes = new Map()
	.set('пицца Маргарита', 'Виктор')
	.set('пицца Пеперони', 'Виктор')
	.set('суши Филадельфия', 'Ольга')
	.set('суши Калифорния', 'Ольга')
	.set('Тирамису', 'Дмитрий')
	.set('Чизкейк', 'Дмитрий')

const alex = {
	name: 'Aleksey'
}

const mariya = {
	name: 'Mariya'
}

const irina = {
	name: 'Irina'
}


const alexOrder = new Set()
	.add('пицца Пеперони')
	.add('Тирамису');

const mariyaOrder = new Set()
	.add('Суши Калифорния')
	.add('пицца Маргарита');

const irinaOrder = new Set()
	.add('Чизкейк');


const customers = new Map()
	.set(alex, alexOrder)
	.set(mariya, mariyaOrder)
	.set(irina, irinaOrder)

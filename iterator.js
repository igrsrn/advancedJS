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
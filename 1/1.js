/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollections = {
  collections: [
    {
      title: "Crazy World",
      artist: "Scorpions",
      year: "1990"
    },
    {
      title: "The Wrong Side of Heaven an...",
      artist: "Five Finger Death Punch",
      year: "2013"
    },
    {
      title: "Hail to the King",
      artist: "Avenged Sevenfold",
      year: "2013"
    },
    {
      title: "King of Metal",
      artist: "Manowar",
      year: "1988"
    }
  ],
}

for (const el of musicCollections.collections) {
  console.log(`${el.title} - ${el.artist} (${el.year})`);
}
  

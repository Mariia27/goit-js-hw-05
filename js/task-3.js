//Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
//При вызове будет получать один аргумент - начальный массив товаров, и записывать его 
//в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items
  };
  addItem(item) {
    this.items.push(item)
  };
  removeItem(item) {
    for (const itemName of this.items) {
      if (itemName === item) {
        const indexOfItem = this.items.indexOf(item)
      //console.log(indexOfItem);
        return this.items.splice(indexOfItem, 1)
      }
    }
    //this.items = this.items.filter(item => item !== this.item)
  };
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
//Напиши функцию-конструктор Account, которая создает объект со свойствами login 
//и email.В prototype функции - конструктора добавь метод getInfo(), 
//который выводит в консоль значения полей login и email объекта который его вызвал.

"use strict";

const Account = function({login, email}) {
  this.login = login;
  this.email = email;
}
Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
}


console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com//



// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype.showGuestInfo = function() {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

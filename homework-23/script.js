'use strict';

/* Завдання 1

a) Створити клас Людина.
  Властивості:
    імʼя;
    стать.
  Методи:
    конструктор, який приймає два параметри: імʼя та стать.

b) Створити клас Квартира.
  Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
  Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

c) Створити клас Будинок.

  Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
  Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

d) В якості демонстрації створити:
  декілька екземплярів класу Людина;
  декілька екземплярів класу Квартира;
  додати екземпляри класу Людина до екземплярів класу Квартира;
  екземпляр класу Будинок;
  додати екземпляри класу Квартира до екземплярів класу Будинок.
*/
class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Apartment {
    residents = [];

    addResident(human) {
        if (human instanceof Human) {
            this.residents.push(human);
        } else {
            console.log("Додаються тільки люди")
        }
    }
}

class House {
    constructor(apartmentMax) {
        this.apartment = [];
        this.apartmentMax = apartmentMax;
    }
    addApartment(apartment) {
        if (this.apartment.length < this.apartmentMax) {
            this.apartment.push(apartment);
        } else {
            console.log("Більше нема квартир")
        }
    }
}

const house = new House(8);

const Frodo = new Human("Frodo", "male");
const Aragorn = new Human("Aragorn", "male");
const Legolas = new Human("Legolas", "male");
const Arwen = new Human("Arwen", "female");
const Gimli = new Human("Gimli", "male");
const Galadriel = new Human("Galadriel", "female");
const Sauron = new Human("Sauron", "male");
const Elrond = new Human("Elrond", "male");
const Eowyn = new Human("Eowyn", "female");
const Faramir = new Human("Faramir", "male");
const Celeborn = new Human("Celeborn", "male");

const apart1 = new Apartment();
const apart2 = new Apartment();
const apart3 = new Apartment();
const apart4 = new Apartment();
const apart5 = new Apartment();
const apart6 = new Apartment();
const apart7 = new Apartment();
const apart8 = new Apartment();


apart1.addResident(Aragorn);
apart1.addResident(Arwen);

apart2.addResident(Sauron);

apart3.addResident(Frodo);

apart4.addResident(Galadriel);
apart4.addResident(Celeborn);

apart5.addResident(Elrond);

apart6.addResident(Faramir);
apart6.addResident(Eowyn);

apart7.addResident(Legolas);

apart8.addResident(Gimli);

house.addApartment(apart1);
house.addApartment(apart2);
house.addApartment(apart3);
house.addApartment(apart4);
house.addApartment(apart5);
house.addApartment(apart6);
house.addApartment(apart7);
house.addApartment(apart8);

console.log("Мешканці в будинку:",house);


// ==========================================================

/* Завдання 2. ЗА БАЖАННЯМ
Мережа фастфудів пропонує кілька видів гамбургерів:
  маленький (50 тугриків, 20 калорій);
  великий (100 тугриків, 40 калорій).

Гамбургер може бути з одним із декількох видів начинок:
  сиром (+ 10 тугриків, + 20 калорій);
  салатом (+ 20 тугриків, + 5 калорій);
  картоплею (+ 15 тугриків, + 10 калорій).

Можна додати добавки:
  посипати приправою (+15 тугриків, 0 калорій)
  полити майонезом (+ 20 тугриків, +5 калорій).


Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

Підказка: потрібен клас Гамбургер, константи (великими літерами), методи для вибору опцій та розрахунку потрібних величин.
Все що береться від імені класу - це статичні методи або властивості.
*/

class Hamburger {
    constructor(size, stuff) {
        this.size = size;
        this.stuff = stuff;
        this.topping = [];
    }
    static SIZE_SMALL = {
        prise: 50,
        calories: 20,
    };
    static SIZE_BIG = {
        prise: 100,
        calories: 40,
    };
    static STUFFING_CHEESE = {
        prise: 10,
        calories: 20,
    };
    static STUFFING_SALAD    = {
        prise: 20,
        calories: 5,
    };
    static STUFFING_POTATO = {
        prise: 15,
        calories: 10,
    };
    static TOPPING_SAUCE = {
        prise: 15,
        calories: 0,
    };
    static TOPPING_MAYO = {
        prise: 20,
        calories: 5,
    };

    addTopping(topping) {
        this.topping.push(topping);
    }

    calculateCalories() {
        let total = this.size.calories + this.stuff.calories;
        for (const topping of this.topping) {
            total = total + topping.calories;
        }
        return total;
    }

    calculatePrice() {
        let total = this.size.prise + this.stuff.prise;
        for (const topping of this.topping) {
            total = total + topping.prise;
        }
        return total;
    }

}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL,
    Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log('Calories: ', hamburger.calculateCalories());

// скільки коштує
console.log('Price: ', hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log('Price with sauce: ', hamburger.calculatePrice());
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
const groceries = [
  {
    name: "Apple",
    number: 12,
    bought: true,
    price: 2,
    get cost() {
      return this.number * this.price;
    },
  },
  {
    name: "Soap",
    number: 1,
    bought: false,
    price: 30,
    get cost() {
      return this.number * this.price;
    },
  },
  {
    name: "Avocado",
    number: 3,
    bought: true,
    price: 60,
    get cost() {
      return this.number * this.price;
    },
  },
  {
    name: "Chocolate",
    number: 1,
    bought: true,
    price: 100,
    get cost() {
      return this.number * this.price;
    },
  },
  {
    name: "Peach",
    number: 10,
    bought: false,
    price: 22,
    get cost() {
      return this.number * this.price;
    },
  },
];


// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
const showGroceries = () => {
  groceries.sort((bought, boughtFalse) => bought.bought - boughtFalse.bought);
  let i = 1;
  for (const grocery of groceries) {
    alert(
      "Item " +
        "№" +
        i +
        ": " +
        grocery.name +
        "\nNeed to buy: " +
        grocery.number +
        " items" +
        "\nThe price is: " +
        grocery.price +
        " uah" +
        "\nAll cost: " +
        grocery.cost +
        " uah" +
        "\nBeen bought?: " +
        grocery.bought
    );
    ++i;
  }
};
showGroceries(groceries);

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
const buyItem = () => {
  const product = prompt("What do you want to check as bought?");
  let number = -1;
  for (let i = 0; i < groceries.length; ++i) {
    if (groceries[i].name === product) {
      number = i;
    }
  }
  if ((product, number >= 0)) {
    groceries[number].bought = true;
    alert(`Is bought?: yes`);
  } else {
    alert(`Don't have this product in list: ${product}`);
  }
};
buyItem();
buyItem();

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
const deleteItem = (i, n) => {
  const groceriesModify = [...groceries];
  groceriesModify.splice(i, n);
  const showModifyGroceries = () => {
    for (const grocery of groceriesModify) {
      alert(
        "Item: " +
          grocery.name +
          "\nNeed to buy: " +
          grocery.number +
          " items" +
          "\nThe price is: " +
          grocery.price +
          " uah" +
          "\nAll cost: " +
          grocery.cost +
          " uah" +
          "\nBeen bought?: " +
          grocery.bought
      );
    }
  };
  showModifyGroceries();
  return groceriesModify;
};
deleteItem(3, 1);

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
const addProduct = () => {
  const product = prompt("What do you want buy?");
  let number = +prompt("How much do you want to buy");
  let price = +prompt("How much does cost 1 thing?");
  for (let i = 0; i < groceries.length; ++i) {
    if (groceries[i].name == product) {
      groceries[i].number += number;
      break;
    }
  }
  for (let i = 0; i < groceries.length; ++i) {
    if (number !== 0) {
      groceries.push({
        name: product,
        number: number,
        bought: true,
        price: price,
        get cost() {
          return this.number * this.price;
        },
      });
    }
    break;
  }
};
addProduct();

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
const sumOfPurchase = () => {
  let sum = 0;
  for (let i = 0; i < groceries.length; ++i) {
    sum += groceries[i].cost;
  }
  return sum;
};
sumOfPurchase();

// Підрахунок суми всіх (не) придбаних продуктів.
const sumOfNotBought = () => {
  let sum = 0;
  for (let i = 0; i < groceries.length; ++i) {
    groceries[i].bought == false ? (sum += groceries[i].cost) : (sum = 0);
  }
  return sum;
};
sumOfNotBought();

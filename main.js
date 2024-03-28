// завдання 1
const temperatureСelsius = 23;
const temperatureFahrenheit = (temperatureСelsius * 9/5) + 32;
console.log("Температура в цельсіях:", + temperatureСelsius);
console.log("Температура в фарингейтах:", + temperatureFahrenheit);

// завдання 2
let day = 30;
let hours = (day * 24);
let minutes = (hours * 60);
console.log("годин в місяці:",+ hours);
console.log("хвилин в місяці:",+ minutes);

// завдання 3
let healthLevel = 100;
let energyLevel = 75;

healthLevel -= 20;
energyLevel -= 15;

console.log("Рівень здоров'я гравця після зменшення: ", + healthLevel);
console.log("Рівень енергії гравця після зменшення: ", + energyLevel);

// завдання 4
let price = 600;
let discount = price * 0.9;
console.log("Ціна після знижки ", + discount);

//завдання 5
let number = 25.35;
console.log("число після округлення:", + Math.floor(number));

//завдання 6
let Number = "34.34";
console.log("перетворення рядка у десяткове число: ", + parseFloat(Number));

// завдання 7 
let integerString = "42";
let integer = parseInt(integerString);
console.log("Перетворення рядка у ціле число: ", + integer);

// завдання 8
let Integer = 36;
console.log("Квадратний корінь числа:", + Math.sqrt(Integer));

// завдання 9
// let integerValue = 42;
// let stringNumber = "99";
// let parsedNumber = parseInt(stringNumber);
// console.log("Результат перетворення рядка у ціле число: ", + parsedNumber);
// let stringInteger = integerValue.toString();
// console.log("Результат перетворення цілого числа у рядок: " + stringInteger);

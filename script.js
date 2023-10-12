// 1) Реалізуйте функцію removeElement(array, item),
// щоб видалити елемент item з масиву array.
const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    let a = array.indexOf(item);
    if (a>=0) {
        array.splice(a, 1);
    }
}
removeElement(array,4);
console.log(array);

// 2) Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне
// лише числових елементів даного масиву.

const myArray = [1, 2, 'tree', 4, 'five', 6];
console.log (myArray);
function calculateAverage(myArray) {
    let numArray = myArray.filter(i => +i);
    let arrayLen = numArray.length;
    let sum = 0;

    for (let i = 0; i < arrayLen; i++) {
        sum += numArray[i];
    }
    const arithmAver = sum/numArray.length;
    return arithmAver;
}

const average = calculateAverage(myArray);
console.log(`Середнє арифметичне чисел в масиві: ${average}`);

// 3) Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let inputText = prompt('Enter sentence');
let characters = prompt('Enter two characters for removing');
function removeCharacters(inputText, characters) {
    let remove = characters.split(' ');
    return inputText.replace(new RegExp(`[${remove}]`, 'gi'), '')
}
const result = removeCharacters(inputText, characters);
console.log (result);

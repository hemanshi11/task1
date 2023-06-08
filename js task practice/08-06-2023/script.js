document.write('<h1> sort method</h1>')

const array = ['string','boolean', 'null', 'undefined','array'];

document.write(array + '</br> </br>') 
array.sort()
document.write(array + '</br> ')

array.reverse();
document.write(array + '</br>')


// sorting for numbers

const numbers = [200, 12, 34, 54,234, 748,8];

const sortednumber = numbers.sort((a ,b)=>{
    // document.write('a',a);
    // document.write('b',b)
    return a - b;
})

document.write(sortednumber + '</br>');



document.write('<h1>from method</h1>')


const myArray = 'ABCDEFGHI';
const txt = Array.from(myArray);

document.write(txt)




// push 

document.write('<h1>push method</h1>');

const fruits = ['Apple','Banana', 'Orange', 'Mango']
document.write(fruits + ' </br>')
fruits.push('Kiwi');
document.write(fruits + '</br>')












const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  document.write(i + '</br>');
}





// includes


let text = "Hello world, welcome to the universe.";
part = text.includes("this");
document.write(part + '</br>')


document.write('this is for Numbers  </br>')
const number = [1,2,3,4,5,6,7,7,8,9]
textvalue =  number.includes(10)
document.write(textvalue + '</br>')


const arr = ["a", "b", "c"];

const array1 = arr.includes("a", -6);
document.write(array1 + '</br>')
document.write([1, , 3].includes(null) + '</br>'); // true


const arrayLike = {
    length: 5,
    0: 2,
    1: 3,
    2: 4,
    3: 4,
    4: 67,
    5: 34
  };
  document.write(Array.prototype.includes.call(arrayLike, 4) + '</br>');
  // true
  document.write(Array.prototype.includes.call(arrayLike, 1) + '</br>');
  // false
  






  
// isArray

document.write('<h1>is array</h1> ')

const fruit = ['Apple','Banana','Mango','kiwi']
const text3 = Array.isArray(fruit)

document.write(text3 + '</br>');

document.write(Array.isArray([]) + '</br>');
document.write(Array.isArray('[]') + '</br>');
document.write(Array.isArray(new Array())+ '</br>');
document.write(Array.isArray([]) + '</br>');
document.write(Array.isArray(new Array(1,2,3)) + '</br>');
document.write(Array.isArray(Array.prototype) + '</br>');



// join()

const elements =  ['Apple','Banana','Mango','kiwi'];
// const event = elements.join();
const event = elements.join(' , ');
document.write(event + '</br>');

// keys
document.write('<h1>keys</h1> </br>');

const array2 = ['a', 'b', 'c'];
const iterator = array2.keys();

for (const key of iterator) {
  document.write(key + '</br>');
}


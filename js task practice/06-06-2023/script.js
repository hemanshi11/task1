// stand up example
document.write('<h1> Stand up example</h1>')

const data = [{
    name: 'hemanshi',
    surname: ['a','b','c','d'],
}, {
    name: 'xyz',
    surname: 'def',
},
  {

      name: 'hemu',
       surname: 'uii',
  } 
]


document.write(data[0].surname[2] + '</br>');
document.write(data[2].surname)

// slice 
document.write('<h1> Slice</h1>')


const array = [
    {
        id: 1, name: 'option1', value: 1
    },

    {
        id: 2, name: 'option2', value: 2
    }
]
array.pop()
// console.log(array)
pushedvalue = {
    id: 2, name: 'option2', value: 'abc'
}
 const val = array.push(pushedvalue);
 document.write( val +'</br>');






let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13);
document.write(part + '</br>');




const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
document.write(fruits + "<br>" + citrus + '</br>')






// some method

document.write('<h1> Some method</h1>')
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

document.write(someOver18 + '</br>')
function myFunction(a){
    return a >18

}



const number = [1, 2, 3, 4, 5];

const testResult = number.some(function (element) {
  return element > 4;
});

document.write(testResult + '</br>');



// reduse method

document.write('<h1> Reduse </h1>')

const total = [45, 4, 9, 16, 25];
let sum = total.reduce(myFunction);

document.write("The sum is " + sum +'</br>');

function myFunction(total, value) {
  return total + value;
}


const total1 = [1,2,3,4,5,6,7,8,9]
let text = total1.reduce(myfunc)

function myfunc (value , total){
return value  + total
} 
document.write(text + '</br>')

const numbers1 = [45, 4, 9, 16, 25];
let sum1 = numbers1.reduce(myFunction, 100);
 document.write("The sum is " + sum1 + "</br>");

function myFunction(total, value) {
  return total + value;
}


const newtext = ['Hello', ' ', 'world' ,'!']

textedvalue = newtext.reduce(( a , b)=>{

 return  a + b
}
)
document.write(textedvalue + '</br>')

// reduseRight
document.write('<h1> Reduse right</h1>')

const num = [1,2,3,4,5];
document.write(num.reduceRight(myfunc) + '</br>')

function myfunc(total, number){
    return total + number
}

// filter
document.write('<h1> Filter method</h1>')


const main = [45, 4, 9, 16, 25];
const over18 = main.filter((a)=> a > 18);

document.write(over18 + '</br>') 






const name = ['nithin', 'rakesh','vijay','ajya']
console.log(name)
text =  name.filter(myfunc);
function myfunc(value){
    return value.length > 4
}

document.write(text)
  



// lastindex of


document.write('<h1> lastIndexof</h1>')
const value = "Near a ear, a nearer ear, a nearly eerie ear."
const index =  value.lastIndexOf('ear');
document.write(index + '</br>');






const fruit = ["Apple", "Orange", "Apple", "Mango"];
let position = fruit.lastIndexOf("Apple") + 1;

document.write("Apple is found in position " + position +'</br>') 





const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 2,
};
document.write(Array.prototype.lastIndexOf.call(arrayLike, 2) + '</br>');
// 2
document.write(Array.prototype.lastIndexOf.call(arrayLike, 5) + '</br>');
// -1


document.write('<h1> map </h1>')
//   map method

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
	document.write(this + '</br>') // 80
},80);

document.write(["1", "2", "3"].map(parseInt)+ '</br>'
)




const number = ['12','23','2','24','19']

const mapping = number.map((x)=>{
    return x < 18;
}) 

document.write(mapping + '</br>');


// splice
document.write('<h1> splice</h1>')

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1

document.write(months + '</br>');
const txt = months.splice(2, 1, 'july')
document.write(months + '</br>');
document.write('removed item is' + ' '+ txt + '</br>');



  


//   concat method
document.write('<h1>concat </h1>')

const a = ['a','b','c'];
const b = ['d','e', 'f']

const c = a.concat(b);
document.write(c + '</br>')



const d = 'hello'
const e =  'world!!!!'

const f = d.concat(' ', e)
document.write(c + '</br>')  

let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll(/Cats/g);
document.write(Array.from(iterator)+ '</br>')



// indexof and lastindexof

document.write('<h1> indexof lastindexof</h1>')

let text1 = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
let index1 = text1.lastIndexOf("locate");

document.write(index1 + '</br>') 


array = [1 ,2 ,3,4,5,6,3,8,9,10]
// newArray = array.indexOf(6)
newArray = array.lastIndexOf(3)
document.write(newArray + '</br>')









// length

document.write('<h1>length</h1>')


var text2 = 'abxdefghijklmnopqrstuvwxyz'
document.write(text2.length + '</br>')

var  part = {name:'harsit', value: '2'}

document.write(part.length + '</br>')

var number1 = [1,2,3,4,5,6,7,8,9,10]

document.write(number1.length + '</br>')

// tostring

document.write('<h1>to string</h1>')

const number2 = ['option1','option2','option3','option4']

document.write(number2 + '</br>')
text= number.toString()
document.write(text + '</br>')

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.join(" * ")) 



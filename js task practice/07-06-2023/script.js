// forEach

document.write('<h1>forEach</h1>')
let ranks = ['A', 'B', 'C'];

ranks.forEach(function (e) {
    document.write(e+ '</br>');
});

const numbers = [45, 4, 9, 16, 25];
text = numbers.forEach((a)=>{
   return  a > 9
})
document.write(text + '</br>')

const numbers1 = [45, 4, 9, 16, 25];
const filteredNumbers = [];

numbers1.forEach((a) => {
  if (a > 25) {
    filteredNumbers.push(a);
  }
});

document.write(filteredNumbers + '</br>');


const div = [1,2,'deeeee','eeeeeeeeeeeee',null, 'dwed1']
div.forEach((e)=> 
 document.write(typeof(e) + '</br>'))

 const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  document.write(x)
  txt += person[x] + " ";
}
document.write(txt + '</br>')



// flatmap
document.write('<h1>flatMap</h1>')
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap((x) => x * 2);
 document.write(newArr + '</br>')

 const name = ['vineet','ajay','sagar']
 document.write(name)
//  console.log('this is replaced value ')
 const newname  = name.flatMap(()=> name[0]='mohit')
 document.write(name + '</br>')

 





//  filter

document.write('<h1> filter method</h1>')
const number = [45, 4, 9, 16, 25];
const over18 = number.filter((a)=> a > 18);

document.write(over18 + '</br>') 



const names = ['nithin', 'rakesh','vijay','ajya']
document.write(names + '</br>')
text =  names.filter(myfunc);
function myfunc(value){
    return value.length > 4
}

document.write(text + '</br>')



// every

document.write('<h1>every</h1>')
const txte = [45, 4, 9, 16, 25];
document.write(txte + '</br>')

text = txte.every((a)=>{
    return a > 16 
});


document.write(text + '</br>')


const array = ['12','swedqwe',23,'@',32,'wd']
array.forEach((a)=>{
    document.write(typeof a + '</br>')
})




// includes

document.write('<h1>includes</h1>')

let text2 = "Hello world, welcome to the universe.";
part = text2.includes("this");
document.write(part + '</br>')


document.write('<b>this is for numbers</b> </br>')
const num = [1,2,3,4,5,6,7,7,8,9]
textvalue =  num.includes(10)
document.write(textvalue)


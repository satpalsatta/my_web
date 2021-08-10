// 1. ways to print in javascript
 console.log("hello world");
 alert("me");
document.write("this is document write")

// 2. javascript console api
console.log("hello world", 4 + 6, "another log");
console.warn("this is warning");
 console.error("this is an error");

// 3. javascript variables
// what are variables? - containers to store data values

/*
multi 
line 
commment


var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

// 4. data types in javascript
numbers
var num1 = 455;
var num2 = 56.76;

// string
var str1 = "this is a string";
var str2 = 'this is also a string';

// objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
 console.log(marks);

// booleans
var a = true;
var b = false;
console.log(a, b);

// var und = undefined;
var und;
 console.log(und);

var n = null;
console.log(n);
/*
at a very high level, there are two types of data types in javascript
1. primitive data types: undefined, null, number, string, boolean, symbol
2. reference data types: arrays and objects
*/

var arr = [1, 2, "bablu", 4, 5]
// console.log(arr)

// operators in javascript
// arithmetic operators
var a = 100;
var b = 10;
// console.log("the value of a + b is ", a+b);
// console.log("the value of a - b is ", a-b);
// console.log("the value of a * b is ", a*b);
// console.log("the value of a / b is ", a/b);

// assignment operators
var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

// comparison operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// logical operators

// logical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// logical not
// console.log(!false);
// console.log(!true);

// function in javascript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// dry = do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// conditionals in javascript
/*
var age = 41;
// single if statement
if(age > 18){
    console.log('you can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('you can drink rasna water');
// }
// else{
//     console.log('you cannot drink rasna water');
// }

age = 25;
// if-else ladder
if(age > 32){
    console.log("you are not a kid");
}
else if(age >26){
    console.log("bachhe nahi rahe");
}
else if(age >22){
    console.log("yes bachhe nahi rahe");
}
else if(age >18){
    console.log("18 bachhe nahi rahe");
}
else{
    console.log("bachhe rahe");
}
console.log("end of ladder");
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.foreach(function(element){
//     console.log(element);
// })
// const ac = 0;
// ac++;
// ac = ac +1;
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myarr = ["fan", "camera", 34, null, true];
// array methods
// console.log(myarr.length);
// myarr.pop();
// myarr.push("harry")
// myarr.shift()
// const newlen = myarr.unshift("harry")
// console.log(newlen);
// console.log(myarr);

// string methods in javascript
let mylovelystring = "harry is a good boy good good harry";
// console.log(mylovelystring.length)
// console.log(mylovelystring.indexof("good"))
// console.log(mylovelystring.lastindexof("good"))

// console.log(mylovelystring.slice(1,4))
d = mylovelystring.replace("harry", "rohan");
// d = d.replace("good", "bad");
// console.log(d, mylovelystring)

let mydate = new date();
// console.log(mydate.gettime());
// console.log(mydate.getfullyear());
// console.log(mydate.getday());
// console.log(mydate.getminutes());
// console.log(mydate.gethours());
 
// dom manipulation
let elem = document.getelementbyid('click');
// console.log(elem);

let elemclass = document.getelementsbyclassname("container")
// console.log(elemclass);
// elemclass[0].style.background = "yellow";
elemclass[0].classlist.add("bg-primary")
elemclass[0].classlist.add("text-success")
// console.log(elem.innerhtml);
// console.log(elem.innertext); 

// console.log(elemclass[0].innerhtml);
// console.log(elemclass[0].innertext); 
tn = document.getelementsbytagname('div')
// console.log(tn)
createdelement = document.createelement('p');
createdelement.innertext = "this is a created para";
tn[0].appendchild(createdelement);
createdelement2 = document.createelement('b');
createdelement2.innertext = "this is a created bold";
tn[0].replacechild(createdelement2, createdelement);
// removechild(element); ---> removes an element
 
// selecting using query
// sel = document.queryselector('.container')
// console.log(sel)
// sel = document.queryselectorall('.container')
// console.log(sel)

// function clicked(){
//     console.log('the button was clicked')
// }
// window.onload = function(){
//     console.log('the document was loaded')

// }
// events in javascript
// firstcontainer.addeventlistener('click', function(){
//     document.queryselectorall('.container')[1].innerhtml = "<b> we have clicked</b>"
//     console.log("clicked on container")
// })

// firstcontainer.addeventlistener('mouseover', function(){
//     console.log("mouse on container")
// })

// firstcontainer.addeventlistener('mouseout', function(){
//     console.log("mouse out of container");
// })

// let prevhtml = document.queryselectorall('.container')[1].innerhtml;
// firstcontainer.addeventlistener('mouseup', function(){
//     document.queryselectorall('.container')[1].innerhtml = prevhtml;
//     console.log("mouse up when clicked on container");
// })

// firstcontainer.addeventlistener('mousedown', function(){
//     document.queryselectorall('.container')[1].innerhtml = "<b> we have clicked</b>"
//     console.log("mouse down when clicked on container");
// })


 arrow functions
function summ(a, b){
    return a+b;
}
summ = (a,b)=>{
    return a+b;
}

logkaro = ()=>{
    document.queryselectorall('.container')[1].innerhtml = "<b> set interval fired</b>"
    console.log("i am your log")
}
// settimeout and setinterval
// clr = settimeout(logkaro, 5000);
// clr = setinterval(logkaro, 2000);
// use clearinterval(clr)/cleartimeout(clr) to cancel setinterval/settimeout

// javascript localstorage
// localstorage.setitem('name', 'harry') 
// localstorage 
// localstorage.getitem('name')
// localstorage.removeitem('name')
// localstorage.clear();

// json 
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = json.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = json.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// template literals - backticks
a = 34;
console.log(`this is my ${a}`)

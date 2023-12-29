// console.log("Namaste Duniya");
// let a = 5;
// let b = "Akash"
// let c = 6.09;
// let d = true;
// // const e = 3
// // e = 5
// console.log(a,b,c,d);

// let firstName = "Akash";
// firstName = 3;
// console.log(firstName);

// let object = {lastName:"Parida",Gender:"Male",Age:21};
// console.log(object.lastName,object['Age']);

// let arr = [1,3,'Akash'];
// console.log(arr[2]);

// function createRectangle(length,breadth){
//     return rectangle = {
//         length: length,
//         breadth: breadth,
//         draw: function(){
//             console.log("draw")
//         }
//     }
// }

// function Rectangle(length,breadth){
//     this.length = length;
//     this.breadth = breadth;
//     this.draw = function(){
//         console.log("draw"); 
//     }
// }
// let r = new Rectangle(3,5);
// r.draw();

// let fn = new Function('length','breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw = function(){
//     console.log("draw"); 
// }`
// );

// let clone = {...r};
// clone.length = 18;
// console.log(r);
// console.log(clone);

// let date3 = new Date(2002,5,4,4,30,10);
// date3.set;
// console.log(date3);


// let arr1 = [1,2,3,4];
// arr1.push(5);
// arr1.unshift(6);
// arr1.splice(1,2,8,9);
// console.log(arr1);


// let courses = [{no:1,subject:"English"},{no:2,subject:"Hindi"}];
// let course = courses.find((course)=> course.no === 1);

// if(course==undefined){
//     console.log("Not present");
// }else{
//     console.log(course); 
// }


// let arr = [1,2,3,4];
// let arr1 = [5,6,7]

// console.log(arr.filter((x)=>x>=3))
// console.log(arr);
// s = "Hello everyone23"

// function sum(...args){
//     let total = 0;
//     for (let i of args){
//         total += i;
//     }
//     return total;
// }

// let person = {
//     fName : "Akash",
//     lName : "Akp",
//     get fullName(){
//         return `${this.fName} ${this.lName}`;
//     },
//     set fullName(value){
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// }

// console.log(person.fullName);
// person.fullName = "binayak parida"
// console.log(person.fullName);


// let arr = [1,2,3,4,5];
// console.log(arr.reduce((a,b)=>a+b));


// let t1 = performance.now();

// for(let i=1;i<=100;i++){
//     let p = document.createElement('p');
//     p.textContent = 'i am para '+i;
//     document.body.appendChild(p);
// }

// let t2 = performance.now();

// console.log(t2-t1);

// t1 = performance.now();

// let d = document.createElement('div');
// for(let i=1;i<=100;i++){
//     let p = document.createElement('p');
//     p.textContent = 'i am para '+i;
//     d.appendChild(p);
// }
// document.body.appendChild(d);
// t2 = performance.now();

// console.log(t2-t1);

// t1 = performance.now();

// let fragment = document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let p = document.createElement('p');
//     p.textContent = 'i am para '+i;
//     fragment.appendChild(p);
// }
// document.body.appendChild(fragment);
// t2 = performance.now();

// console.log(t2-t1);

// while(true){
//     console.log("HI");
// }

setTimeout(()=>console.log("hello"),50000)
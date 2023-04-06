// let a = 10;
// let b = 40.5;
// let c = "Hello";
// let d = 'Santo';
// let e = true;
// let u;
// let n = null

// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof u)
// console.log(typeof n)

// let k = 50, l = 100
// let operation = (k>20) && (l < 150);
// console.log("(" + k +" >20) && ("+ "<150 == "+operation)

//  operation = (k>20) || (l < 150);
// console.log("(" + k +" >20) || ("+ "<150 == "+operation)

// operation = (k>200) && (l < 150);
// console.log("(" + k +" >200) && ("+ "<150 == "+operation)

//  operation = (k>20) || (l < 1500);
// console.log("(" + k +" >20) || ("+ "<1500 == "+operation)
 
// operation = (k>200) || (l < 15);
// console.log("(" + k +" >20) || ("+ "<1500 == "+operation)

// let n1 = 5
// ++n1;
// console.log(n1)  
// console.log(++n1) 


//If else statement
// const age = 20;
// const bage = 20;
// // const whoelder = age < bage;
// // console.log(whoelder)
// if (age>bage){
//     console.log('You are elder');
// }
// else if (age==bage) {
//     console.log('Both are same age');
// }
// else{
//     console.log('Your brother is elder');
// }

//Switch case Statement

// const day = 54;
// switch(day){
//     case 0:
//         console.log("Monday");
//         break;
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednessday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;

//     default:
//         throw new Error('Invalid day');
// }


//Background color

const theme = 'light'

// let bgcolor = theme == 'light'? '#33333333' : '#efefef';
// console.log(bgcolor);

// const bgcolor = '';
// if (theme == 'light'){
//     bgcolor = '#333333';
// }
// else{
//     bgcolor = '#efefef';
// }

//Loop//
// let sum = 0;
// for(let i = 1; i<= 100; i++){
//     console.log(i); 
//     sum = sum + i;
// }
// console.log("Sum is "+sum);
// let i =1;
// while(i<=100){
// console.log(i);
// i++
// }

//For in loop
// cname = 'Santo Rasu'
// for(let i in cname){
// console.log(cname[i]);
// }
// console.log("\n")
// // For of loop
// for(let v of cname){
//     console.log(v);
// }

//Array in JS
let arr= [];
 arr[0]= 1;
 arr[1]= 2;
 arr[2]= 3;
 arr[3]= 4;
 console.log(arr.length);
 console.log(arr);
 console.log(typeof(arr));

 const names = [
    'santo' , 'rasu' , 'Sabbir' , 'Rahim'
    , 'Mahfuz'
 ];
 names[names.length]= 'abir khan'
 console.log(names);
 console.log(typeof(names));

 //constructor pattern

 const a1 = new Array();
 console.log(a1,a1.length);

 const a2 = new Array(5);
 console.log(a2,a2.length);//5 empty items
 
 const a3 = new Array(1,2,3,4,5,6);
 console.log(a3,a3.length);

 console.log(a1.__proto__constructor);
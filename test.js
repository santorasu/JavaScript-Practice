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
let sum = 0;
for(let i = 1; i<= 100; i++){
    console.log(i); 
    sum = sum + i;
}
console.log("Sum is "+sum);
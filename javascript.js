// function sleep(name){
//     console.log(name +' is sleeping');
// }

// sleep("Rasu");
// sleep("Santo");

// function sum(a,b)
// {
//     return a+b;
// }
// let x = sum(4,5);
// let y = sum(4,7);
// console.log(x);
// console.log(y);

const car = {
    name: "Fiat",
    model: 500,
    weight: '850KG',
    colour: 'White',
    start: function(){
        console.log('Car can started'); // Object method
    },
    drive: function(){
        console.log('Car can drive');
    }
};
console.log(car.weight);
console.log(car['model']);
car.start();

// console.log("naber");

                            //FUNCTION Traditional
// function sum(num1,num2){
//     return num1+num2;
// }
// console.log(sum(2,3));



                            //Function Expressions named or anonymus

// const sum = function(num1,num2){
//     return num1+num2;
// }
// console.log(sum(23,25));

// function pascalNumbers(n){
//     console.log(n);
//     if(n==1) return 1;
//     return  n + pascalNumbers(n-1);
// }

// console.log(pascalNumbers(10));


//                           Arrow Function

// const d= (num1,num2) => num2+100;

// console.log(d(3,5));

// const g=(...others) => {
//     let sum=0;
//     for(i=0;i<others.length; i++){
//         sum+=others[i]
//     }
//     return sum;
// }
// console.log(g(2,34,532,2,123,32,21));

// const dog={
//     name:'fluffy',
//     age:5,
//     whatname(){
//         console.log(this);
//         return this.name;
//     }
// };
// console.log(dog.name);

// const greet = (user= 'New User') => `welcome ${user}`

// console.log(greet('mar'));

// const car=() => {
//     return{ name:"Audi"};
// };
// console.log(car());

// let student={};
// student.name='mark';

// function sayHi2(student){
//     console.log(`Hello! ${student.name} from entry point`);
//     student.name='John';
//     console.log(`Hello! ${student.name} from entry point`);
// }

// sayHi2(student);
// console.log(student.name);

// var i =1;
// var sayilar="";
// for(;i<101;i++){
//     if(i%5!=0){
//         sayilar+=i+' '; 
//     }
//     else{
//         continue;
//     }

// }
// console.log(sayilar);

// [1-6] arasinda random sayi 3 defa 3 gelirse oyun biter 6 cikan kazanir

// let randomNumber=0;
// let countFor3=0;

// while(randomNumber!=6){
//     randomNumber=Math.trunc(Math.random()*6)+1;
//     console.log("Random number :" , randomNumber)
//     if (randomNumber==3) {
//         countFor3+=1;        
//     }else if(countFor3==3){
//         console.log("gecmis olsun");
//         break;
//     }
//     else if(randomNumber==6){
//         console.log("SAYI GELDI TEBRIKLER");
//         break;
//     }
    
// }

// function square(num){
//     num=num*num;
//     return num;
// }

// let myNum =4;
// console.log(square(myNum));

// const students =["ahmet", "mehmet", "behic" , "hiko"]

// function greet(student){
//     console.log(`Welcome ${student}`);
// }

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     greet(element);
// }


const studentObject ={
    firstName: "Yusuf",
    studentNumber:"C-9333",
} 

function sayHi(s){
    s.firstName= 'Halil';
    s.studentNumber='C9234';
    return `Welcome ${s.firstName}`;
}

console.log(sayHi(studentObject));
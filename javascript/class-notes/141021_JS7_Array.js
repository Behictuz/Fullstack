// var s = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi harum laboriosam, unde nam suscipit cumque eum ratione fugiat! Laudantium laborum pariatur quos voluptatem doloremque dolore obcaecati nisi dignissimos velit facilis.";

// console.log(s.split(" "));

//              substr()  negatif index kullanilamaz


// console.log(s.substr(22,-10));

//          substring()     

// console.log(s.substring(22,2));


//         toLowerCase()       toUpperCase()

// var pangram="pijamali hasta yagiz soföre cabucak güvendi";

// console.log(pangram.toLocaleUpperCase("tr"))
// console.log(pangram.toUpperCase());

// const car=['Opel', 'Audi', 'Bmw', 2 , ['Hello', 'World']];

// // console.log(car[4][0]);
// // const x= new Array (2,10);
// // console.log(x);

// // const car = ["mercedes"]    bu calismaz cunku const degismez

// const car2=['Opel', 'Audi', 'Bmw'];
// const car3=['Opel', 'Audi', ['Hello', 'World']];

// console.log(car2.concat(car,"car3"));

// const daltone = ['Joe' , 'Jack' , 'William', 'Avarel'];

// daltone.sort();
// console.log(daltone);

// daltone.reverse();
// console.log(daltone);

// const point = [40,100,1,5,25,10];
// console.log(points.sort());

const fruits=["Banana","apple","Mango","Orange"];

// let c=fruits.pop(); son elemani siler
// console.log(fruits);
console.log(fruits.push("elma","nevzat"));
console.log(fruits);

//   Shift() & unshift()

const a=fruits.shift();
console.log(fruits);
fruits.unshift(a);
console.log(fruits);

// splice()  bölüyorrrrr bozuyor


//slice()    bölmeden sadee o araligi aliyor
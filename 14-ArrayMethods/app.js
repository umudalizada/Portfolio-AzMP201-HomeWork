
// SUAL 1

// arr =[1, 73, 99, 20];

// function func(arr,ind){
//     result = arr.slice(0,ind);
//     console.log(result);
// }

// func(arr,1);
// func(arr,2);
// func(arr,0);
// func(arr,4);




// SUAL 2

// let array=[1, 73, 99, 20]
// let arr;
// function forJoin(array){
//     console.log(array.join("*"))
//     console.log(array.join("/"))
// }
// forJoin(array)




// SUAL 3

// let sentence="Salam NecEsen";
// let cumle=""
// function convert(sentence){
//     for(let i=0; i<sentence.length; i++){
//         if(sentence[i]==sentence[i].toUpperCase()){
//             let boyuk=sentence[i].toLowerCase()
//             cumle+=boyuk
//         }
//         if(sentence[i]==sentence[i].toLowerCase()){
//             let kicik=sentence[i].toUpperCase()
//             cumle+=kicik
//         }
        
        
//     }
//     console.log(cumle)
//   }

//   convert(sentence)



// SUAL 4   

// let arr = [0, 1, false, 2, undefined, '', 3, null];

// function type(array){
//     for(let i=0; i<array.length ; i++){
//         if(array[i]==false ){
//             array.splice(i,1);
//         }
//         if(array[i]==undefined){
//             array.splice(i,1)
//         }
//         if(array[i]==""){
//             array.splice(i,1)
//         }
            
//         }
        
    
//     console.log(array)
    
// }
    
// type(arr)

// SUAL 5

// let array = [9, 2, 'c', 2, true,false,14,14, 'm', false];

// function clear(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 arr.splice(j, 1); 
//             }
//         }
//     }
//     console.log(arr);
// }
    
// clear(array)







// SUAL 6
// let arr1 = [1, 9, 2, 4];
// let arr2 = [1, 9, 2, 4];

// function isEqual(array1, array2) {
  
//     if (array1.length !== array2.length) {
//         return false;
//     }
//     else{

//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }
//     }

//     return true;
//     }
// }

// console.log(isEqual(arr1, arr2));



// SUAL 7


// let word=prompt("Soz daxil edin : ")
// let char=prompt("Char daxil edin : ")
// let charIn;
// let sum=0
// function charIndex(word,char){
//     for (let i = 0; i < word.length; i++) {
//         if(word[i]==char){
//             sum+=i
//             return sum
//         }
//          else{
//             return -1;
//         }
//     }
// }

// let netice=charIndex(word,char)
// console.log(netice);



// SUAL 8

// let array=[1,3,5,7]
// let string='Umud'
// let index=Number(prompt("index daxil edin : "))

// function indexArray(array,string,index){
//   if(index>array.length){
//     array.push(string)
//   }
//   else{
//     array.splice(index,0,string)
//   }
//   return array
// }

// let netice=indexArray(array,string,index)
// console.log(netice);


// SUAL 9

// function AddSymbol(arr1,arr2,char){
//   let concatArray=arr1.concat(arr2)
//   concatArray=concatArray.join(char)
//   console.log(concatArray);
// }

// let arr1=[1,23,4];
// let arr2=[3,4,5];
// let element="*";

// AddSymbol(arr1,arr2,element)


// SUAL 10

// let student=[ { name: "Ali", scores: [90, 85, 92] },
// { name: "Davud", scores: [100, 100, 100] },
// { name: "Mammal", scores: [75, 80, 85] },
// { name: "Camil", scores: [90, 95, 85] },
// ]

// function avareg(array) {
//   let result = array.map((elem) => {
//     return elem.scores.reduce((acc, score) => {
//       return acc += score;
//     }, 0) / elem.scores.length;
//   });
//   console.log(result);
// }

// avareg(student)




// SUAL 11
// const webTechs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "Redux",
//   "Node",
//   "JS",
//   "MongDB",
// ];

// function newArray(webTechs){
//   const result = webTechs.filter((elem) => elem.length > 4);
//   console.log(result);
// }

// newArray(webTechs);


// SUAL 12


// const products = [
//   {
//     id: 1,
//     title: "Smartphone",
//     description: "A high-end smartphone with the latest features.",
//     price: 799.99,
//   },
//   {
//     id: 2,
//     title: "Laptop",
//     description: "Powerful laptop with a large screen and fast processor.",
//     price: 1299.99,
//   },
//   {
//     id: 3,
//     title: "Coffee Maker",
//     description: "An automatic coffee maker with a built-in grinder.",
//     price: 99.99,
//   },
//   {
//     id: 4,
//     title: "Headphones",
//     description: "Wireless over-ear headphones with noise-cancellation.",
//     price: 199.99,
//   },
//   {
//     id: 5,
//     title: "Smart TV",
//     description: "55-inch 4K Smart TV with streaming apps built-in.",
//     price: 699.99,
//   },
// ]



// function calculateTotalAndAverage(products) {
//   const result = products.reduce((acc, elem) => {
//     acc.cem += elem.price; 
//     return acc; 
//   }, { cem: 0 });

//   result.ortalama = result.cem / products.length; 
//   return result; 
// }

// const netice = calculateTotalAndAverage(products);
// console.log(netice);


// SUAL 13

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// function  country(array){
//   let result = array.filter(elem=>elem[0].toUpperCase()=="A" && elem[elem.length-1].toUpperCase()=="A");
//   console.log(result)


// }
// country(countries)



// SUAL 14

// function findNumberOfDivisors(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// let num=Number(prompt("eded daxil et"))
// findNumberOfDivisors(num)


// SUAL 15

// function findSpaceCounts(str) {
//   let count = 0;
//   for (let i = 0; i <= str.length; i++) {
//     if(str[i]==" "){
//       count++

//     }

//   }
//   console.log(count);
// }
// let str=prompt("Cumle daxil et")
// findSpaceCounts(str)
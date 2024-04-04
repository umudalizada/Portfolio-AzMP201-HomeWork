// SUAL 8


// let arr=[3,8,2,5,4,10,7,6];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2!=0) {
//         console.log(i)
//     }
    
// }



// SUAL 9

// let arr=[3,8,2,5,4,10,7,6];

// for (let i = 0; i < arr.length; i++) {
//     if (i%2!=0) {
//         console.log(arr[i])
//     }
    
// }



// SUAL 10

// let arr=[3,8,2,5,4,10,7,6];
// let max=arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>max) {

//         max=arr[i]
       
//     }
// }
// console.log(max)



// SUAL 11


// let arr=[3,8,2,5,4,10,7,6];

// let max=arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==0) {

//         if(arr[i]>max){
            
//             max=arr[i]
            
//         }

        
//     }
// }
// console.log(max)



// SUAL 12

// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let minIndex = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minIndex) {
//         minIndex = i;
//     }
// }

// console.log("Minimum elementin indeksi:", minIndex);


// SUAL 13

// let arr=[3,8,2,5,4,10,7,6];

// let max=arr[0];
// let maxIn;
// let min=arr[0];
// let minIn;

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>max){
//         max=arr[i]
//         maxIn=i;
//     }
//     if(arr[i]<min){
//         min=arr[i]
//         minIn=i;
//     }
// }

// arr[maxIn]=min;
// arr[minIn]=max
// console.log(arr)



// SUAL 14


// let arr=[3,8,2,5,4,10,7,6];

// let max=arr[0];
// let maxIn;
// let min=arr[0];
// let minIn;

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2==0){
//         if(arr[i]<min){
//             min=arr[i]
//             minIn=i
//         }
//     }
//     if(arr[i]%2!=0){
//         if(arr[i]>max){
//             max=arr[i]
//             maxIn=i
//         }
//     }

// }

// arr[maxIn]=min
// arr[minIn]=max
// console.log(arr)

// SUAL 15


// let num=Number(prompt("Ededi daxil et: "))

// let arr=[3,8,2,5,4,10,7,6];


//     if (arr.includes(num)) {
//         console.log('var')
//     }
//     else{
//         console.log('yoxdur')
//     }




// SUAL 16 



// let arr=[3,8,2,5,4,10,7,6]
// let max=arr[0];
// let min=arr[0];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]
//       if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<min){
//         min=arr[i]
//     }
    

  
      
    
    
// }
// console.log(sum-(max+min))


// SUAL 17


// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]

// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] == "boolean"){
//         console.log(arr[i-1])
//         console.log(arr[i+1])
//     }
// }


// SUAL 18

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
// let soz="";
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i]=="string"){
//         if(arr[i].length>soz.length){
//             soz=arr[i];
//         }
//     }
// }
// console.log(soz)



// SUAL 19

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
// let indexx;
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i]=="string" && arr[i]==arr[i].toUpperCase()){
//         indexx=i
//         console.log("index: "+indexx+ " soz: " + arr[i])
        
        
//     }
// }

// SUAL 20

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         let big = arr[i];
//         let count = 0; 
//         for (let j = 0; j < big.length; j++) {
//             if (big[j] === big[j].toUpperCase()) {
//                 count++;
//             }
//         }
//         if (count > 2) { 
//             console.log(big);
//         }
//     }
// }
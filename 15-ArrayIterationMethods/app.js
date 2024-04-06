let students=[
    {
      id: 1,
      name: "Nurane",
      surname: "Ismayilzade",
      age: 21,
      hobbies: ["music", "walking", "watchingfilm"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "cavid" },
        { id: 4, name: "alisa" },
      ],
      loginDetail: { username: "nurana21", password: "nunu123" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 88,
      salaryAZN: 144,
    },
    {
      id: 2,
      name: "Gizilgul",
      surname: "Allahverdiyeva",
      age: 20,
      hobbies: ["book", "writing code"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "babaxan" },
        { id: 4, name: "gulshen" },
      ],
      loginDetail: { username: "allahverdieva1", password: "salam123" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 70,
      salaryAZN: 100,
    },
    {
      id: 3,
      name: "Xanim",
      surname: "Nuriyeva",
      age: 21,
      hobbies: ["book", "music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "hikmet" },
        { id: 4, name: "gulsen" },
      ],
      loginDetail: { username: "xanim123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 80,
      salaryAZN: 145,
    },
    {
      id: 4,
      name: "Minaya",
      surname: "Binnetova",
      age: 21,
      hobbies: ["book", "gaming", "movie", "music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "anar" },
      ],
      loginDetail: { username: "binnetova", password: "hello123" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 90,
      salaryAZN: 142,
    },
    {
      id: 5,
      name: "Sabina",
      surname: "Hatamli",
      age: 21,
      hobbies: ["shopping", "listen to music"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Mirvari" },
      ],
      loginDetail: { username: "sebine123", password: "salam123" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 81,
      salaryAZN: 146,
    },
  
    {
      id: 6,
      name: "Ləman",
      surname: "Şamilova",
      age: 20,
      hobbies: [
        "watching movies",
        "reading books",
        "painting",
        " walking",
        " listen to music",
      ],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
      ],
      loginDetail: { username: "lemanshamilova", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 85.8,
      salaryAZN: 145,
    },
    {
      id: 7,
      name: "Narmin",
      surname: "Musayeva",
      age: 21,
      hobbies: ["book", "gaming", "painting", "walking"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "fidan" },
        { id: 4, name: "Irada" },
      ],
      loginDetail: {
        username: "narmin0",
        password: "narmin01",
      },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: false,
      avgPoint: 80,
      salaryAZN: 196,
    },
  
    {
      id: 8,
      name: "Fatima",
      surname: "Akhundzada",
      age: 20,
      hobbies: ["drawing", "sleeping"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Valida" },
      ],
      loginDetail: { username: "aynur123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: false,
      avgPoint: 76,
      salaryAZN: 100,
    },
    {
      id: 9,
      name: "Elmir",
      surname: "Huseynov",
      age: 21,
      hobbies: ["book", "ice skating", "Tennis", "Karting"],
      student: true,
      teacher: [
        { id: 1, name: "Gurban" },
        { id: 2, name: "Hajar" },
        { id: 3, name: "Morad" },
        { id: 4, name: "Fikrat" },
      ],
      loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
      gender: "man",
      boyfriendGirlfriend: false,
      fail: true,
      avgPoint: 76,
      salaryAZN: 120,
    },
    {
      id: 10,
      name: "Fidan",
      surname: "Rehimli",
      age: 21,
      hobbies: ["book", "gaming"],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "Turan" },
      ],
      loginDetail: { username: "fidan123", password: "fidanrahimli" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: true,
      avgPoint: 75,
      salaryAZN: 98,
    },
    {
      id: 11,
      name: "Aynur",
      surname: "Aynurova",
      age: 20,
      hobbies: ["book", "gaming"],
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
      ],
      loginDetail: { username: "aynur123", password: "salamBaku" },
      gender: "girl",
      boyfriendGirlfriend: true,
      fail: true,
      avgPoint: 81,
      salaryAZN: 120,
    },
  
    {
      id: 12,
      name: "Elman",
      surname: "Muradov",
      age: 20,
      hobbies: [
        "book",
        "gaming",
        "sking",
        "wrestling",
        "swiming",
        "arguing about philosophy",
        "solving sudoku",
        "hiking",
        "walking",
      ],
      student: true,
      teacher: [
        { id: 1, name: "gurban" },
        { id: 2, name: "hajar" },
        { id: 3, name: "jale" },
        { id: 4, name: "akhmed" },
      ],
      loginDetail: { username: "elman17", password: "elman12345" },
      gender: "girl",
      boyfriendGirlfriend: false,
      fail: true,
      avgPoint: 76,
      salaryAZN: 100,
    },
  ];




  function studentFunc(array){
    for (let i = 0; i < array.length; i++) {
      console.log(array[i])
    }

  }



  function studentName(name){
    for (let i = 0; i < name.length; i++) {
      console.log(name[i].name)
    }
    
  }


  function studentNameSurname(names){
    for (let i = 0; i < names.length; i++) {
      console.log( `ad: ${names[i].name} Soyad: ${names[i].surname}`)
    }
    
  }

  function kesr(kesrTelebe){
  for (let i = 0; i < kesrTelebe.length; i++) {
    if(kesrTelebe[i].fail==true){
      console.log(kesrTelebe[i].name + ' ' + kesrTelebe[i].surname)
    }

    }
        
    
  }

  function hobbie(students){
  let max=0;
  let maxIndex=''
  for (let i = 0; i < students.length; i++) {
    if(students[i].hobbies.length>max){
      max=students[i].hobbies.length;
      maxIndex=students[i]

    }
  }
    console.log(`${maxIndex.name} --- ${maxIndex.hobbies}`)

}


  
function degre(students){
  let maxDeg=0
  let ad;
  for (let i = 0; i < students.length; i++) {
      if(students[i].avgPoint>maxDeg){
        maxDeg=students[i].avgPoint
        ad=students[i]
      }
}

  console.log(ad.name+ "  "+ad.surname)
}


function pass(password){
  let maxPas=''
  let ad;
  for (let i = 0; i < password.length; i++) {
      if(students[i].loginDetail.password.length>maxPas.length){
        maxPas=students[i].loginDetail.password
        ad=students[i]
      }

  }
  console.log(ad.loginDetail.username+ "  "+ad.surname)


}


function boyfr(students){
  let maxPas=''
  let ad;
  for (let i = 0; i < students.length; i++) {

    if(students[i].boyfriendGirlfriend==true){
      console.log(students[i].name + " " +students[i].loginDetail.username )            
    }


  }


}

// boyfr(students)



// pass(students)

//   degre(students)


//   hobbie(students)

// studentFunc(students)

//   studentName(students)

//   studentNameSurname(students)

//   kesr(students)





// let result = students.map((elem) => {
    
//     let usd=elem.salaryAZN / 1.70 ;
//     return { name: elem.name, salaryAZN: usd + ' USD'};
// });

// console.log(result);






// let result=students.map((elem)=>{
//     let teac=elem.teacher.map((muellim)=>{
//         let basherif=muellim.name.charAt(0).toUpperCase()
//         let digerhisse=muellim.name.slice(1)
        
//         return basherif+digerhisse;

//     });
//     return teac;

// });

// console.log(result);





// let result=students.filter((elem=> !elem.loginDetail.password.split('').some(regem=>!isNaN(regem)))).map((elem=>elem.name))


// console.log(result);




// let result=students.filter((elem=> elem.gender==="girl")).map((elem=>elem.teacher.find(muellim=>muellim.id===3)))

// console.log(result);





// let result = students.map(elem => {

//     return{
//         Name: elem.name, 
//         MuellimSayi: elem.teacher.length
//     }

// });

// console.log(result);




// let result=students.reduce((acc,elem)=>{

//     acc.push({
//         name: elem.name,
//         username: elem.loginDetail.username,
//         password: elem.loginDetail.password
//     })
//     return acc


// },[])

// console.log(result);











// let result=students.map((elem=>elem.teacher.map((muellim=>muellim.name.concat(" muellim")))))


// console.log(result);





// let result=students.map((elem=>elem.loginDetail.password.padStart(elem.loginDetail.password.length +3,"   ")))

// console.log(result);





// let result=students.map((elem=>{
//     let ilkhisse=elem.loginDetail.password.slice(0,4)
//     let sonrakihisse="*".repeat(elem.loginDetail.password.length-4)
//     return ilkhisse+sonrakihisse
// }

// ))

// console.log(result);








// let result = students.map(elem => {
//     return {
//       Name: elem.name,
//       Surname: elem.surname.slice(0,elem.name.length)
//     }
// })
  
// console.log(result);



// let result=students.reduce((acc,elem)=>{
    

//     return acc+=elem.age;

// },0)/students.length

// console.log(result);






// let result=students.reduce((acc,elem)=>{
    

//     return acc+=elem.avgPoint;

// },0)/students.length

// console.log(result);






// let result = students.filter(elem =>elem.hobbies.includes("book"))

// console.log(result);








// let result=students.reduce((acc,elem)=>{
//     acc+=elem.age
//     acc=acc/students.length
//     return acc

// },0)

// console.log(result);


// let result=students.map((elem)=>{

//     return{
//         cinsiyyet: elem.gender,
//         yas: elem.age
//     }

// })

// console.log(result);



// let result = students.reduce((acc,elem)=>{
//     acc+=elem.name.length
//     acc+=elem.surname.length
//     return acc;
 
//  },0)
//  console.log(result);





// let result=students.map((elem)=>elem.name.split("").reverse().join(''))

// console.log(result);


// let result = students.filter(elem =>elem.hobbies.includes("gaming"))
// console.log(result);


// let result = students.reduce((acc,elem)=>{
//     acc.push(elem.hobbies)
//     return acc;
//   },[])
//   console.log(result);





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
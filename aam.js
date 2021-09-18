let nums=[5,1,2,3,10];
// let arr=[];
// nums.forEach(function(val){
//    arr.push(val * 2);
// })
// console.log(arr);

function doubleValues(){
    let arr=[];
nums.forEach(function(val){
   arr.push(val * 2);
})
console.log(arr);
}


function onlyEvenValues(){
    let arr=[];
    nums.forEach(function(val){
        if(val % 2 === 0){
            arr.push(val);
        }
    })
    console.log(arr);
}

let names=["colt", "matt", "tim", "test"];

function showFirstAndLast(){
    let arr=[];
    names.forEach(function(letters){
        arr.push(letters[0] + letters[letters.length-1]);
    })
    console.log(arr);
}

let objNames=[
    {name: "Elie"},
    {name: "Tim"},
    {name: "Matt"},
    {name: "Colt"}
];

function addKeyAndValue(x,y){ 
    objNames.forEach(function(val){
        val.title="instructor";
    })
    console.log(objNames);
}
let name="jake"

function vowelCount(){
    let count={};
    let vowels="aeiou"
   let arr=Array.from(name);
   arr.forEach(function(letter){
       let lower=letter.toLowerCase();
       if(vowels.indexOf(lower) !== -1){
           if(count[lower]){
               count[lower]++;
           } else{
               count[lower] = 1;
           }
       }
   })
   return count;
}


function doubleValuesWithMap(){
    let arr=[];
    nums.map(function(val){
        arr.push(val * 2);
    })
    return arr;
}


function valTimesIndex(){
    let arr=[];
    nums.map(function(val, i){
        arr.push(val * i);
       
    })
    return arr;
}

function extractKey(){
   return objNames.map(function(val){
       return val.name;
   })
}

let fullNames=[
    {first: "Elie", last: "Schoppik"},
    {first: "Tim", last: "Garcia"},
    {first: "Matt", last: "Lane"},
    {first: "Colt", last: "Steele"},
];

function extractFullName(){
    return fullNames.map(function(val){
        return val.first + " " + val.last;
    })
}

let catOwners=[
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
];

function filterByValue(){
    return catOwners.filter(function(val){
        return val.isCatOwner === true;
    })
}

function find(arr, x){
    return arr.filter(function(val){
              return val === x; 
    })
    [0];
}

function findInObj(arr, key, searchCriteria){
   return arr.filter(function(val){
        return val[key] === searchCriteria;
    })
    [0];
}

function removeVowels(str){
    let lower=str.toLowerCase();
    let arr=Array.from(str);
    let vowels="aeiou";
    return arr.filter(function(val){
        if(vowels.indexOf(val) === -1){
            return val;
        }
    })
}

function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val %2 !== 0;
    })
    .map (function(val){
        return val * 2;
    })
}

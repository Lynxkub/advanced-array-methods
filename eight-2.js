let nums=[1,2,3,4,5,6,7,8,];

function hasOddNumber(arr){
    return arr.some(function(val){
        return (val % 2 !==0);
    })
}

let number=130471231410;

function hasAZero(str){
   return str.toString().split("").some(function(val){
       return val === "0";
   })
    
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return (val % 2 !== 0);
    })
}

function hasNoDuplicates(arr){
    let obj={};
     arr.forEach(function(val){
         if(arr.indexOf(val) !== -1)
        if(obj[val]){
            obj[val]++
        }else{
            obj[val] =1;
        }
    })
    
   let newObj=Object.values(obj);
   return newObj.every(function(val){
       return val === 1;
   })
   
}

let names = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  function hasCertainKey(arr, key){
      return arr.every(function(val){
          return val[key];
      })
  }

  function hasCertainValue(arr, key, value){
        return arr.every(function(val){
            return val[key] === value;
        })
  }

  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

  function findUserByUsername(arr, str){
      return arr.find(function(val){
          return val.username === str;
      })
  }

  function removeUser(arr,str){
   let idx =arr.findIndex(function(val){
        return val.username === str;
    })  
    if (idx === -1) return;
    return arr.splice(idx,1)[0]; 
  }
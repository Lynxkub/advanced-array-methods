const names = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

function extractValue(arr, key){
    return arr.reduce(function(accumulator, nextValue){
       accumulator.push(nextValue[key]);
       return accumulator;
    },[]);
}

function vowelCount(str){
    let vowels="aeiou";
    return str.split("").reduce(function(acc,next){
        let lower=next.toLowerCase();
        if(vowels.indexOf(lower) !==-1){
            if(acc[lower]){
                acc[lower]++;
            }else{
                acc[lower] =1;
            }
        }
        return acc;
    },{})
};

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,i){
        arr[i][key] = value;
        return acc
    },arr)
};
let nums=[1,2,3,4,5,6,7,8]
function isEven(val){
    return val % 2 === 0;
};

function partition(arr, callback){
    return arr.reduce(function(acc, next){
        if (callback(next)){
            acc[0].push(next);
        }else{
            acc[1].push(next);
        }
        return acc;
        
    }, [[],[]]);
}

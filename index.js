function callBack(x,y,arr){
    return `Index ${y} value equals ${x} in arr:[${arr}]`
}

function newForEach(arr,callback){
 
for(let i in arr){
  
    console.log(callback(arr[i],i,arr))
}
 

}

function myMapCallback(y,i,arr){
 
    return `[${i}] has value of ${y}, in arr: [${arr}]`
}


function newMap(arr,callback){

    for(let i in arr){
        console.log(callback(arr[i],i,arr))
      
    }
}

function newFilter(arr,callback){

}

function myFindCallBack(x,i,arr){

   
     return `${x} at index[${i}] is greater than 11, in arr:[${arr}]`
    
     
 }
 

function newFind(arr,callback){

    for(let i in arr){
        
        if(arr[i] > 11){
            return callback(arr[i],i,arr)
        }
    }
    return `There is no element in arr:[${arr}] greater than 11`
}

function myFindIndexCallBack(x,i,arr){

    return `Index ${i} value == ${x} , which is greater than 21, in arr: ${arr}`
}

function newFindIndex(arr,callback){

    for(let i in arr){
        
        if(arr[i] > 21){
          return  callback(arr[i],i,arr)
        }
    }
    return `No Index in arr: [${arr}] have a value > 21`
}

function myReduceCallBack(x,arr){
    return `Sum of arr: [${arr}] values == ${x}`
}

function newReduce(arr,callback,addNum){
  addNum = (addNum === undefined) ? addNum = 0: addNum;
 let value = 0 + addNum;
 for(let i in arr){
     value += arr[i]
 }
 return callback(value,arr)
}

function mySomeCallBack(x,i,arr){
    
    if(`${x}` > 11){
        return true 
    }
    
}

function newSome(arr, callback){
    console.log('Does arr have at least one value greater than 11?')
    for(let i in arr){
     
        if(callback(arr[i],i,arr) === true){
            
           return callback(arr[i],i,arr)
        }
    }
   return false
}

function myEveryCallBack(x,i,arr){
return `Every element in arr: ${arr} are greater than 11`
}

function newEvery(arr,callback){
 console.log('Statement: all arr values are positive numbers')
    for(let i in arr){
        
        if(arr[i] <= 0){
            return false
        }
    }
    return true
}

function myFillCallBack(arr,newArr){
return `initial arr: [${arr}], new arr: [${newArr}]`
}

function newFill(arr,callback,num){
    console.log('3th parameter in newFill is the value, which can be changed, and have a default value of 5')
    num = (num === undefined) ? num = 5 : num 
   let newArr = []
    for(let i in arr){
        newArr[i] = num
    }
    return callback(arr,newArr)
}

function myIncludesCallBack(arr,i,x){
console.log(`Arr includes ${x}, at index[${i}]`)
return true
}

function newIncludes(arr,callback,num){
    console.log('Does arr includes a specific value? PS: Default value == 9, but can be changed as 3th parameter == value')
  num = (num === undefined) ? num = 9: num
    for(let i in arr){
        if(num === arr[i]){
            return callback(arr,i,num)
        }
    }
    return false
}

function myIndexOf(i,boolean){
    if(boolean ==true){ 
    return `Index ${i}`
    }
   if(boolean === false){
       return -1
   }
}

function newIndexOf(arr,callback,num){
  console.log('SearchElement === newIndexOf 3th parameter, default value set as 5')
  num = (num === undefined) ? num = 5: num;
    for(let i in arr){
        if(num === arr[i]){
            return callback(i,true)
        }
    }
    let i = -1
   return callback(i,false)
}

function myConcat(val){
 return `newArr = [${val}]`
}

function newConcat(arr,callback,arrn){
  arrn = (arrn === undefined) ? arrn = 0: arrn;
    let newArr = []
    let lengthArr = arr.length + arrn.length;

    for(let i in arr){
        newArr[i] = arr[i]
    }

 let num = 0;
    for(let i = arr.length; i < lengthArr; i++){
        newArr[i] = arrn[num]
        num++
    }
    if(newArr.length === arr.length){
        console.log('Please enter a new arr as newConcat 3th parameter')
    }
    return callback(newArr)
}

function myJoin(x){
 return `${x}`
}

function newJoin(arr,callback,separator){
    let str = ''
  if(separator === undefined){
  console.log("It's possible to add a 3th parameter as the separator(includes '')")
  }
    for(let i in arr){
        str += arr[i] 
        if(separator!== undefined && i < arr.length-1){
            str += separator
        }
    }
    return callback(str)
}
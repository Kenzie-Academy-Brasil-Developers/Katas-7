function callBack(x,y){
    return `Index ${y} value equals ${x}`
}

function newForEach(arr,callback){
 
for(let i in arr){
  
    console.log(callback(arr[i],i))
}
 
}

function newMap(arr,callback){
 let newArr = []
    for(let i in arr){
        
      newArr[i] = callback(arr[i],i)
    }
    return newArr

}

function newFilter(arr,callback){

}

function newFind(arr,callback){

    for(let i in arr){
        console.log(arr[i])
        if(callback(arr[i]) === true){
            return arr[i]
        }
    }
    return undefined
}

function newFindIndex(arr,callback){

    for(let i in arr){
        console.log(arr[i])
        if(callback(arr[i]) === true){
            return `Index ${i}`
        }
    }
    return undefined
}

function newReduce(arr,callback){
 let value = 0;
 for(let i in arr){
     value += arr[i]
 }
 return value + callback
}

function newSome(arr, callback){
    
    for(let i in arr){
        
        if(callback(arr[i]) === true){
            return true
        }
    }
    return false
}

function newEvery(arr,callback){

    for(let i in arr){
        
        if(callback(arr[i]) === false){
            return false
        }
    }
    return true
}

function newFill(arr,callback){
   let newArr = []
    for(let i in arr){
        newArr[i] = callback
    }
    return newArr
}

function newIncludes(arr,callback){
    for(let i in arr){
        if(callback === arr[i]){
            return true
        }
    }
    return false
}

function newIndexOf(arr,callback){

    for(let i in arr){
        if(callback === arr[i]){
            return i
        }
    }
    return -1
}

function newConcat(arr,callback){
    let newArr = []
    let lengthArr = arr.length + callback.length;

    for(let i in arr){
        newArr[i] = arr[i]
    }

 let num = 0;
    for(let i = arr.length; i < lengthArr; i++){
        newArr[i] = callback[num]
        num++
    }
    return newArr
}

function newJoin(arr,callback){
    let str = ''

    for(let i in arr){
        str += arr[i] 
        if(callback !== undefined && i < arr.length-1){
            str += callback
        }
    }
    return str
}
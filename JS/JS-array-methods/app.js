let num=[10,2,38,7,3,28,3,33,12,5,37,]
let num2=[6,7,8,9,10]


// length

console.log(num.length)


// toString 


console.log(num.toString())


// pop , push , shift , unshift

// num.unshift(9)
console.log(num)



// at 

console.log(num.at(-1))
console.log(num[num.length-1])



// join


console.log(num.join("-"))

// delete


// console.log(num.delete(3))


// console.log( delete  num[3])
// console.log(num.length)


// concat

console.log(num.concat(num2))



// slice


console.log(num.slice(3,5))
console.log(num)


// splice


// console.log(num.splice(0,2,8,10))
console.log(num)

// ferq (slice-splice) : (start-end)-(start-count) (orginala toxunmur-orginala toxunur) (yenis element elave etmek olmur- olur)



// Search Methods


// indexOf, lastindexOf, includes


console.log(num.indexOf(13))
console.log(num.lastIndexOf(13))
console.log(num.includes(13))


//  3 rəqəmini sil

let index= num.indexOf(3)

num.splice(index,1)
console.log(num)


// Sort


// console.log(num.sort((a,b)=>a-b))



// Algotithms

/*
1.  Bir funksiya yazın 2 parametr qəbul tsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
console.log(array_filled(6, 0));
Expected Output:e
[0, 0, 0, 0, 0, 0]


for, push, bir bos array

*/


/*

Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.
Məsələn:
console.log(range(1, 4));
Expected Output:
[1, 2, 3, 4]

*/


function RangeArr(start,end){
    let arr=[]
    for(let i=start; i<=end;i++){
        arr.push(i)
    }
    return arr
}


console.log(RangeArr(15,60))
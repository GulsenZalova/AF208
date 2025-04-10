// void and return

function SayHello(){
   return "hello world"
}

let result=SayHello()

console.log(result)

// regular expression or anonim  arrow  (sintaksis)

// 1. regular
function SayHello(){
    return "hello world"
 }


// 2. expression

let Total=function () {
    let sum=10+5
    return sum
}

console.log(Total())

// arrow

let Hello = () => {
    return  "hello arrow"
}

console.log(Hello())



// paramertli ve parametrsiz 

// f(x)=2x+4

// let username=prompt("adinizi yazin")

// function Greet(username){
//     return `Welcome ${username}`
// }


// console.log(Greet(username))


// let Greet=function (username){
//     return `Welcome ${username}`
// }

// console.log(Greet(username))


// let Greet = (username) => {
//     return `Welcome ${username}`
// }

// console.log(Greet(username))


// default parametr


// function Sum(a,b=10){
//     let total= a+b
//     return total
// }


// console.log(Sum(10))

// Algorithms (if,for,function mix)

// 1. Bir funksiya yazin.Rəqəmlərdən ibarət arrayi parametr kimi qəbul etsin və onların cəmini qaytarsın.



function Sum(arr){
    let sum=0
   for(let i=0;i<arr.length;i++){
        sum+=arr[i]
   }
   return sum
}


console.log(Sum([10,20,30,40,50]))

// if, for, funksiya
// 2.Bir funksiya yazın iki parametr qəbul etsin. Birinci parametr rəqəmlərdən ibarət array , ikinici parametr isə rəqəm olsun. Arraydəki bütün  rəqəmlər daxil edilən ikinci parametrin bölənləridirsə, funksiya true return etsin, yox bir dənəsi belə böləni deyilsə false qaytarsın.

// [2,3,4,6] , 12



function Find(arr,num){
   for(let i=0;i<arr.length;i++){
      if(num%arr[i]!=0){
        return false
      }
   }

   return true
}

console.log(Find([2,3,4,6],12))



// 3. Bir funksiya yazın iki parametr qəbul etsin. Birinci parametr hər hansı bir söz, ikinci parametr isə hərf hansı hər olsun. Bu hərfin o söz içərisində neçə dəfə olduğunu tapıb qaytarsın.

// function FindLetter(str,letter){
//     let count=0
//      for(let i=0;i<str.length;i++){
//          if(str[i].toLowerCase()==letter.toLowerCase()){
//             count++
//          }
//      }

//      return count
// }

// console.log(FindLetter("hello","o"))


// 4. Funksiya yazın.İki parametr qəbul etsin. Birinci parametr array ikinci parametr isə bir ədəd olsun. Funksiyanız bu array içərisində olan ədədlərdən parametr kimi daxil etdiyimiz ədəddən kiçik və ya ona bərabər olan ən böyük ədəddi tapmalıdır.Məsələn
 
// findBigNumber([11,2,32,4,57,6], 45) burada 45 -dən kiçik olan ən böyük ədəd 32-dir. Deməli 32-ni return edəcək.



function findBigNumber(arr,num){
    let maxNumber=null
     for(let i=0;i<arr.length;i++){
        if(arr[i]<num && arr[i]> maxNumber){
             maxNumber=arr[i]   
             console.log(arr[i])
        }
     }
    //  return maxNumber
}



console.log(findBigNumber([11,2,32,-6,43,57,-8],-5))



// 5. Bir funksiya yazın string şəklində bir parametr qəbul etsin. Bu sözün palindrom olub olmamasını tapın.Palintrom tərsdən oxunduqda da eyni olan sözlərə deyilir.


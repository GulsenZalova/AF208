// object property, object method , this keyword
// for in , for of,
// object keys, object values, object entiries
// reference and primitive type,heap and stack, destruce, spread
// functional constructor,setprototypeof



// key and value
// let name="Narmin"

const student={
    name:"Sevda",
    surname:"Guliyeva",
    email:"sevda@gmail.com",
    birthYear:2005,
    isStudent:true,
    Fullname: function(){
        return `${this.name} ${this.surname}`
    },
    CalcAge:function(){
        return 2025-this.birthYear
    }
}

// console.log(student.age)

// console.log(student.Fullname())

// console.log(student.CalcAge())


// student.name="Mehrin"
// student=false

// console.log(student)

// const ave=90

// ave=95


// console.log(ave)



// data types
// primitive and non-primitive(reference)



let a=5

let b=a

a=10

// console.log(a)

// console.log(b)



// let human={
//     name:"Nurlan"
// }

// let human2=human

// human.name="Nasir"

// console.log(human)
// console.log(human2)



// primitiv oldugu ucun deyerleri muqayise edir
let x=5
let y=5

// non-primitive oldugu ucun addressleri 
const  num1=[1,2,3,4,5]
let num2=[1,2,3,4,5]

console.log(x==y)
console.log(num1==num2)

num1[0] = 10

console.log(num1)



let {name,surname,isStudent}=student



console.log(name)




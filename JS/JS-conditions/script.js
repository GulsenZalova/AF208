// if if-else else
// switch-case
// falsy - 0, -0 , null , undefined , nan, "", '',``, false
// truthy menfi ve musbet ededler, infinity ,-infinity, {}, []


// let isStudent=false
// let num=-10
// if(num>0){
//    console.log("musbetdir")
// }
// else if(num<0){
//     console.log("menfidir")
// }
// else{
//     console.log("sifirdir")
// }


let num = 10



if (num > 0) {

    if (num % 2 == 0) {
        console.log("cutdur")
    }
    else {
        console.log("tek reqem")
    }
} else {
    console.log("musbet reqem daxil edin")
}


// promtdan gelecek
// let email = prompt("email daxil edin")
// let username = prompt("username daxil edin")
// let password = prompt("password daxil edin")


// gercek olanlar
// let trueUsername = "Gulshan"
// let truePassword = "12345"
// let trueEmail = "zalova0202@gmail.com"


// email varmi
// username ve password control edilmelidir


// if (trueEmail == email) {
//     if (password === truePassword && username === trueUsername) {
//         alert("welcome")
//     }
//     else {
//         alert("invalid password or username")
//     }
// } else {
//     alert("xahis edirik register edin")
// }




// Ternary Operators    ?  :


// let num2 = -10
// if (num2 > 0) {
//     console.log("musbetdir")
// }
// else if (num2 < 0) {
//     console.log("menfidir")
// }
// else {
//     console.log("sifirdir")
// }



// num2 > 0
//     ? console.log("musbetdir")
//     : num2 < 0
//         ? console.log("menfidir")
//         : console.log("sifirdir")



// switch-case

let day = 1

switch (day) {
    case 1:
        console.log("bazar ertesi")
        break
    case 2:
        console.log("ç.a")
        break
    case 3:
        console.log("ç")
        break;
    case 4:
        console.log("c.a")
        break;
    case 5:
        console.log("c")
        break;
    case 6:
        console.log("senbe")
        break;
    case 7:
        console.log("bazar")
        break;
    default:
        console.log("duzgun reqem daxil edin")
        break;
}


// let num1 = Number(prompt("ilk reqemi daxil edin"))
// let num2 = Number(prompt("ikinci reqemi daxil edin"))
// let calc = prompt("emeliyyati daxil edin")
// let result

// switch (calc) {
//     case "+":
//         result = num1 + num2
//         console.log(result)
//         break;
//     case "-":
//         result = num1 - num2
//         console.log(result)
//         break;
//     case "*":
//         result = num1 * num2
//         console.log(result)
//         break;
//     case "/":
//         result = num1 / num2
//         console.log(result)
//         break;
//     default:
//         console.log("duzgwn emaliyyat daxil etmediniz")
//         break;
// }




// Filterleme
// let category = "men"
// switch (category) {
//     case "kids":
//         console.log("buyrun kids kateqori mehsullari")
//         break;
//     case "women":
//         console.log("buyrun women kateqori mehsullari")
//         break;
//     case "men":
//         console.log("buyrun men kateqori mehsullari")
//         break;
//     default:
//         break;
// }
// length

let text="lorem ipsum"

console.log(text.length)


console.log(text[3])

// charAt


console.log(text.charAt(-1))
// menfi istiade olunarsa bos string qaytarir

// charCodeAt

console.log(text.toUpperCase().charCodeAt(2))


// at

console.log(text.at(0))


// slice 


console.log(text.slice(2))
// iki menfi yazilasrsa bos string qaytarir




// substring
// substr


console.log(text.substring(3))

console.log(text.substr(3,7))


// contact

let st="hello"
let st2="world"
let st3="salam"
console.log(st +" "+st2)
console.log(`${st} ${st2}`)
console.log(st.concat("-",st2,"-",st3))


// trim


console.log(text.trim().length)



// replace and replaceAll


console.log(text.replaceAll("m","k"))

// split


console.log(text.split(" "))



// indexOf


console.log(text.indexOf("a"))

console.log(text.lastIndexOf("m"))



// includes


console.log(text.includes("a"))


// startWith and endWith


console.log(text.startsWith("lo"))

console.log(text.endsWith("m"))
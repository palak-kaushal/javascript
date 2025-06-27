// i regular expression
// const regex = /hello/

// console.log(regex.test("hello"))
// console.log(regex.test("Hello"))
// console.log(regex.test("heLLo"))

// g regular expression
// const fruit ="apple,mango,banana,lichi,grapes,apple"
// const regex =/apple/g
// console.log(fruit.match(regex))

// m regular expression

// const a =`hello
//  world`
// const regex = /world$/m
// console.log(regex.test(a))

// let text ="visit W3scholls!";
// let n =text.search("W3schools!")
// console.log(n)

// let text ="visit microsoft!"
// let result =text.replace("microsoft","W3schools")
// console.log(result)

// const regex =/a.b/
// console.log(regex.test("ab"))
// console.log(regex.test("ahb"))
// console.log(regex.test("a1b"))
// console.log(regex.test("abjahak"))

// const regex =/^hello/
// console.log(regex.test("hello world"))
// console.log(regex.test("world hello"))

//$ string last character check

// const regex =/hello$/
// console.log(regex.test("hello world"))
// console.log(regex.test("world hello"))

//* expression

// const regex =/go?gle/
// console.log(regex.test("ggoole"))
// console.log(regex.test("gogle"))
// console.log(regex.test("google"))
// console.log(regex.test("goggle"))
// console.log(regex.test("goglle"))
// console.log(regex.test("gogllle"))

// const regex =/["0-9"]/
// console.log(regex.test("7876657938"))

const regex =/[a-zA-Z]{4,}/;
console.log(regex.test("cat"))
console.log(regex.test("cats"))
console.log(regex.test("elephant"))
console.log(regex.test("ab123"))
console.log(regex.test("ADG123"))



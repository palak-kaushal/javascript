// a = 5 
// b=4
// console.log(a**b)

//check the variable type 

// console.log(5=="5")
// console.log(5==="5")
// console.log(5!="5")
// console.log(5!=="5")
// console.log(5>5)
// console.log(5<5)
// console.log(5>=5)
// console.log(5<=5)

//logical 
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)
// console.log(!true)
// console.log(!false)

// const a= 10;
// if(!!a){
//    console.log("a is true") 
// }else{
//     console.log("a is true") 
// }

let button = document.getElementById("button")

// button.onclick = function() {
//     alert("using javascript property")
// }

// button.addEventListener("click", function(event) {
//     console.log("javascript")
//     console.log(event.target)
//     console.log(event.type)
//     console.log(event.key)
//         // alert("javascript")
// })

// const input = document.getElementById("input")

// input.addEventListener("keydown", function(event) {
//     console.log(event.key)
//     console.log(event.type)
//     console.log(event.target)

// })

// button.addEventListener("click", pressbutton)
// function pressbutton = function() {
//     alert("javascript")
// })


// const cont = document.getElementById("container")

// cont.addEventListener("mouseover", function() {
//     cont.style.backgroundColor = "red"
// })
const btn =document.getElementById("btn")
const ctn =document.getElementById("ctn")

btn.addEventListener("click",function(event){
    alert("btn is clicked")

})
ctn.addEventListener("click",function(event){
    alert("ctn is clicked")
})



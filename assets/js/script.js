// let colors = Array.from(document.querySelectorAll(".colorCircle"));

// let dropZone = document.querySelector(".dropColor")

// let btn = document.querySelector(".setColor")

// let custom = document.querySelector(".custom")


// colors.forEach(color => {
//     let red = color.getAttribute("data-red")
//     let green = color.getAttribute("data-green")
//     let blue = color.getAttribute("data-blue")

//     let rgbObject = { red, green, blue }

//     color.addEventListener("dragstart", (e) => {
//         e.dataTransfer.setData("text", JSON.stringify(rgbObject))
//     })
// })

// dropZone.addEventListener("dragover", (e) => {
//     e.preventDefault();
// })

// dropZone.addEventListener("drop", (e) => {
//     let rgbColor = JSON.parse(e.dataTransfer.getData("text"));

//     // let red = rgbColor.red
//     // let green = rgbColor.green
//     // let blue = rgbColor.blue


//     let { red: qirmizi, green: yasil, blue: goy } = rgbColor;
//     // console.log(yasil);
//     // console.log(rgbColor.green);

//     dropZone.style.backgroundColor = `rgb(${qirmizi},${yasil},${goy})`

//     // console.log(rgbColor);
// })

// btn.addEventListener("click", () => {
//     let red = document.getElementById("red").value
//     let green = document.getElementById("green").value
//     let blue = document.getElementById("blue").value

//     custom.setAttribute("data-red", red)
//     custom.setAttribute("data-green", green)
//     custom.setAttribute("data-blue", blue)

//     custom.style.backgroundColor = `rgb(${red},${green},${blue})`


//     console.log(red, green, blue);
// })


// custom.addEventListener("dragstart", (e) => {
//     let red = custom.getAttribute("data-red")
//     let green = custom.getAttribute("data-green")
//     let blue = custom.getAttribute("data-blue")

//     let rgbColor = { red, green, blue }

//     e.dataTransfer.setData("text", JSON.stringify(rgbColor))
// })


// dropZone.addEventListener("drop", (e) => {
//     let rgbColor = JSON.parse(e.dataTransfer.getData("text"));
//     let { red, green, blue } = rgbColor
//     console.log(red, green, blue);
// })


let ul = document.querySelector("ul")
let item1 = document.querySelector("#item1")
let item2 = document.querySelector("#item2")
let item3 = document.querySelector("#item3")

let html = document.querySelector("html")

console.log(item2.nextElementSibling.nextSibling);
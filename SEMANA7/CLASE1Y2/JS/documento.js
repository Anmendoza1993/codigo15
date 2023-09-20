// vamos a cambiar el color del body

// paso 1, como podemos obtener un elemento desde js

// Forma antigua
const cuerpoDeLaWeb = document.getElementsByTagName ("body")
console.log("getElementsByTagName", cuerpoDeLaWeb[0])

// Forma Actual
const cuerpoDeLaWeb2 = document.querySelector("body")
console.log ("querySelector", cuerpoDeLaWeb2)

cuerpoDeLaWeb2.style.backgroundColor= "#c9c9"
cuerpoDeLaWeb2.style.fontSize = "20px"




const secondaryTitles =document.getElementsByTagName ("h2")
for (const item of secondaryTitles){
    console.log(item)
}


console.log("--------------")

const secondaryTitles2 = document.querySelectorAll("h2")
secondaryTitles2.forEach((item) => {
    console.log(item)
})

// obtener elemento por ID
// antigua
const title = document.getElementById("title")
// moderno
const title2 =document.querySelector("title")


// obtener elemento por Class
// antigua
const imageAvengers = document.getElementsByClassName("img-avengers")
console.log (imageAvengers)
// noderna
const imageAvengers2 = document.querySelector(".img-avengers")

// button
const btnChangeWeb = document.querySelector("#btn-change-web")
btnChangeWeb.onclick =function (){
    imageAvengers2.src ="https://img.asmedia.epimg.net/resizer/822ZLYRftCbOFAxN0NsdLgJdul4=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/KAUEQWGP6FLWXJQMKBUJNXYDUE.jpg"

    imageAvengers2.style.cssText=`
    width: 200px;
    title2.textContent ="Avengers Pacasmayo";
    `
    
}

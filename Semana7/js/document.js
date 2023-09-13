// Vamos a cambiar el color del body 

// Paso1 Como podemos obtener un elemento desde Js 

// Antigua 
const cuerpoDeLaWeb = document.getElementsByTagName("body");
console.log("getElementsByTagName", cuerpoDeLaWeb[0]);

// Moderna 
const body = document.querySelector("body");
// body.style.backgroundColor = "#eee";
// body.style.fontSize = "20px";
;

body.style.cssText = `
background-color: #eee;
font-size: 20px;
`;

const secondaryTitles = document.getElementsByTagName("h2");

for (const item of secondaryTitles){
    console.log(item);
}

console.log("-------");

const secondaryTitles2 = document.querySelectorAll("h2");
secondaryTitles2.forEach((item) => {
    console.log(item);
    
});

// Obtener elemeno por ID 
// Antigua 
const title = document.getElementById("title");
// Moderna 
const title2 = document.querySelector("#title");

// Obtener elementos por class 
// Antigua 
const imageAvengers = document.getElementsByClassName("img-avengers");
console.log(imageAvengers);
// Moderna 
const imageAvengers2 = document.querySelector(".img-avengers");

// buttton 
const btnChangeWeb = document.querySelector("#btn-change-web");

btnChangeWeb.onclick = function(){
    imageAvengers2.src = "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg"

    imageAvengers2.style.cssText = `
    width: 200px;
    `
    title.textContent = "Avengers End Game"
};



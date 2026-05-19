let name = "Được Chúa ban phước"
let age = 25
let passion = ["Basketball","Piano","calligrafie"]

let a = 7
let b = 24
let c = 1
console.log( a + b );
console.log("hello " + "everyone");
console.log(name+age)
function additioner (nombre=0) {
    console.log(33+17)
}
additioner(3)

function additioner2(nombre1=0, nombre2=0) {
    console.log(33+2)
}
additioner2(17,22)

let title = document.querySelector('h1');

title.addEventListener('click', () => {
    console.log('okay')
    title.innerText = 'Salam'
});
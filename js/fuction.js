function LikeCity() {
    document.getElementById("heartCity").style.visibility = "visible";
}
function pinocho() {
    document.getElementById("heartpinocho").style.visibility = "visible";
}
function squidgame() {
    document.getElementById("heartsquidgame").style.visibility = "visible";
}
function cartelsocial() {
    document.getElementById("heartcartelsocial").style.visibility = "visible";
}
function halloween() {
    document.getElementById("hearthalloween").style.visibility = "visible";
}
function campamento() {
    document.getElementById("heartcampamento").style.visibility = "visible";
}

/*
*************************************************** 
    burguer mobile
***************************************************  
*/

const button = document.querySelector('.burguer')
const Burguer_nav = document.querySelector('.Burguer_nav')
const nav = document.querySelector('.nav')

button.addEventListener('click', () => {
    Burguer_nav.style.display = 'flex'
})

Burguer_nav.addEventListener('click', () => {
    document.body.style.width = 'auto';
    Burguer_nav.style.display = 'none'
})

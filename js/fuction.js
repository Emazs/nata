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
const header = document.querySelector('.header')

button.addEventListener('click', () => {
    const scrollY = window.scrollY; // Guarda la posición actual del scroll
    document.body.style.position = 'fixed';
    document.body.style.width = '-webkit-fill-available';
    document.body.style.top = `-${0}px`;

    header.style.display = 'none'
    Burguer_nav.style.display = 'flex'
})

Burguer_nav.addEventListener('click', () => {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt('0'));


    document.body.style.width = 'auto';
    header.style.display = 'flex'
    Burguer_nav.style.display = 'none'
})

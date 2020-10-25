const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const reseauxAnime = document.querySelectorAll('.reseau');
const flecheAnime = document.querySelector('.arrowRight');
const textApparition= document.querySelector('.textApparition');

// const showContent = () => {
//     document.querySelector('.loaderContainer').classList.add('hidden');
// };
// setTimeout(showContent, 1000);

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('menuOpen');
    overlay.classList.toggle('overlayOpen');
});


flecheAnime.addEventListener('mouseover',() =>{
    flecheAnime.classList.add('ouverture');
    textApparition.classList.add('apparition')
});

flecheAnime.addEventListener('mouseleave',() =>{
    textApparition.classList.remove('apparition')

});



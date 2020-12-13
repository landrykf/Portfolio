const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const reseauxAnime = document.querySelectorAll('.reseau');
const flecheAnime = document.querySelector('.arrowRight');
const flecheAnimeLeft =document.querySelector('.arrowLeft')
const textApparition= document.querySelector('.textApparition');
const textApparitionLeft = document.querySelector('.textApparitionLeft')
const project1 = document.querySelectorAll('.project1');
const project2 = document.querySelectorAll('.project2')
let filterElementTab = [];

// console.log(project2)

// const showContent = () => {
//     document.querySelector('.loaderContainer').classList.add('hidden');
// };
// setTimeout(showContent, 1000);

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('menuOpen');
    overlay.classList.toggle('overlayOpen');
});

if (flecheAnime != null) {
    flecheAnime.addEventListener('mouseover',() =>{
        flecheAnime.classList.add('ouverture');
        textApparition.classList.add('apparition')
    });
    
    flecheAnime.addEventListener('mouseleave',() =>{
        textApparition.classList.remove('apparition')
    });
}

if (flecheAnimeLeft != null) {
    flecheAnimeLeft.addEventListener('mouseover',() =>{
        flecheAnimeLeft.classList.add('ouverture');
        textApparitionLeft.classList.add('apparition')
    });
    
    flecheAnimeLeft.addEventListener('mouseleave',() =>{
        textApparitionLeft.classList.remove('apparition')
    });
}


projectFilter('all')

function projectFilter(value) {
    let box = document.getElementsByClassName('box')
    if (value == 'all') value ='';
    for (let i = 0; i < box.length; i++) {
        removeClass(box[i],"show");
        if(box[i].className.indexOf(value) > -1){
            addClass(box[i],"show")
        }
    }
}

function addClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i] == -1)){
          element.className +=" " + arr2[i];   
        }
    }
}

function removeClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
    element.className = arr1.join(" ")
}



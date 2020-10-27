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

// function ProjectFilter(personnage) {
//     // Declare variables
//     let projectFil = document.getElementById("personnagesSearch");
//     let persoDiv = document.querySelectorAll('.persoDiv')


//     personnagesSearch.addEventListener('keyup', () => {
//         let input = personnagesSearch.value;
//         let result = personnage.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
//         let suggestion = "";
//         if (input != '' && input != " ") {
//             result.forEach(resultItem => suggestion += `<div class = "suggestion"><p>${resultItem.name}</p><div>`)
//         }
//         document.getElementById('suggestions').innerHTML = suggestion;


//         //trier les elements dans ma barre de recherche et les afficher
//         for (let i = 0; i < persoDiv.length; i++) {
//             let inclue = personnage[i].name.toLocaleLowerCase().includes(input.toLocaleLowerCase());
//             // console.log(suggestion)



//             if (!inclue) {
//                 persoDiv[i].classList.add('inclue');
//             } else {
//                 persoDiv[i].classList.remove('inclue')
//             };

//         }
//     })
// }
// ProjectFiter("all")

// function ProjectFiter(c) {
//     let box,i;

//     box = document.querySelectorAll(".box");
//     if(c == "all") c="";
//     for (i =0;i <box.length;i++){
//         removeClass(box[i],"show");
//         if(box[i].className.indexOf(c)>-1) addClass(box[i],"show")
//     }
//     console.log(box[i])
// }

// function addClass(element, name) {
//     let i, arr1,arr2;
//     arr1 = element.className.split("");
//     arr2 = name.split("");
//     for(i=0;i<arr2.length;i++){
//         if(arr1.indexOf(arr2[i])==-1){
//             element.className += "" + arr2[i];
//         }
//     }
// }

// function removeClass(element,name) {
//     let i,arr1,arr2;
//     arr1 = element.className.split("");
//     arr2 = name.split("");
//     for (i = 0; i < arr2.length;i++){
//         while (arr1.indexOf(arr2[i]) > -1){
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
// }
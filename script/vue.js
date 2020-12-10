const reseaux = [
    {id:1, link:"http://github.com", img:"/medias/imagesPortfolio/github.png", alt:"github"},
    {id:2, link:"http://linkedin.com", img:"/medias/imagesPortfolio/linkedin.png", alt:"linkedin"},
    {id:3, link:"http://twitter.com", img:"/medias/imagesPortfolio/twitter.png", alt:"twitter"},
    {id:4, link:"http://facebook.com", img:"/medias/imagesPortfolio/facebook.png", alt:"facebook"},

];

const projects = [
    {id:1, title:"Portfolio", img:"/medias/imagesPortfolio/projet1.png",alt:"portfolio", technos:["vue.js","js","html","css"]},
    {id:2, title:"JS-space-breaker", img:"medias/imagesPortfolio/projet2.png",alt:"portfolio", technos:["js","html"]}

]

const proProjects = [
    {id:1, title:"projet", img:"/medias/imagesPortfolio/attente.png",alt:"portfolio", technos:["php","js","html","css"]},
] 


const tags = [
    {id:1, tag :"all",message:"afficher tout"},
    {id:2, tag :"html",message:"html 5"},
    {id:3, tag :"js",message:"javascript"},
    {id:4, tag :"js",message:"javascript"},
    {id:5, tag :"vue.js",message:"vue js"},

]

const Home = () => Promise.resolve ({
    template:'#home',
    name:'Home',
    data: () =>{
        return {
            reseaux,
        }
    },
    mounted(){
        let script = document.createElement('script');
        script.setAttribute('src','script/JSspace-breaker.js');
        document.head.appendChild(script)

    },
})


const Portfolio = {

    template:'#portfolio',
    name:'Portfolio',
    
    data: () =>{
        return {
            projects,
            proProjects,
            tags,
        }
    },

}

const Contact = {
    template: '#contact',
    name: 'Contact'
}



//router 

const router = new VueRouter({
    routes : [
        {path:'/', component: Home, name: 'Home'},
        {path:'/portfolio',component: Portfolio, name: 'Portfolio'},
        {path:'/contact',component: Contact, name: 'Contact'},
    ]
})

const vue = new Vue({
    router
}).$mount('#app')
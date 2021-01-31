'use strict'
//Make navbar transparent when it is on the top
const navbar=document.querySelector('#navbar');
const navbarHeight=navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    //check value in console
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);

    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu=document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click',(event)=>{
    
    const target = event.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }
    //check value in console
    console.log(event.target.dataset.link);
    
    scrollIntoView(link);
});

//Handle click on "Contact me" button on home
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
});

//Make home slowly fade to transparent as the window scrolls downn
const home =  document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    //chedck algorithm
    //console.log(1 - window.scrollY / homeHeight);

    home.style.opacity = 1 - window.scrollY / homeHeight;
});


//Show arrow up button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=> {
    if (window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

//Handle click on the arrow up button
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
});











//make function for fast work
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}
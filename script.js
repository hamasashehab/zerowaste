const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const nav = document.getElementById("nav");
menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
});


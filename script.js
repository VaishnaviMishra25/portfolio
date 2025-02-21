let menu= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toogle('bk-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Aspiring Software Engineer | ECE Student'],
    typeSpeed: 50,
    backspeed:80,
    backdelay:1200,
    loop:true,
  });

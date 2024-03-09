"use strict";


// ---------------------------------------------------------------- variable ----------------------------------------------------------------
const swiper = $('#swiper');
const turn_left = $('#left-turn');
const turn_right = $('#right-turn');
const body = $('body');
let sum = 0;
let son = 0;

const menu_btn = $('#menu_btn');
const close_btn = $('#close_btn_menu');
const dropdown = $('#dropdown');



menu_btn.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown_class');    
    body.style.cssText = 'overflow: hidden'
});

close_btn.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown_class');
    body.style.cssText = 'overflow: auto'
});


turn_left.addEventListener('click', () => {
    if(sum == 0) {
        sum = 5;
        swiper.style.cssText = `transform: translateX(-${sum * 377}px);`
    }else if(sum != 0){
        sum -= 1;
        swiper.style.cssText = `transform: translateX(-${sum * 377}px);`
    }
});

turn_right.addEventListener('click', () => {
    turn_rightt();
});




// ---------------------------------------------------------------- functions ----------------------------------------------------------------

function turn_rightt(){
    console.log(1);
    if(son != 5) {
        son +=1;
        swiper.style.cssText = `transform: translateX(-${son * 377}px);`
    }else if(son == 5){
        son = 0;
        swiper.style.cssText = `transform: translateX(0px);`
    }
}

setInterval(() => {
    turn_rightt();
}, 3000)
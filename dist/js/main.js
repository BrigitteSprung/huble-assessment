import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

var swiper = new Swiper('.swiper-container', {
    // auto init the intance
    init: true,
    // 'horizontal' or 'vertical'
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
       }
});
// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';


const buttonBurger = document.querySelector('.menu__burger');

const toggleMenu = () => {
  buttonBurger.addEventListener('click', () => {
    buttonBurger.classList.toggle('menu__burger--js');

  });
};

toggleMenu();

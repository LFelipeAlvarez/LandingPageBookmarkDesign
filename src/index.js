import './styles/main.scss';

const $hamburgerButton = document.getElementById('hamburgerButton');
const $closeButton = document.getElementById('closeButton');
const $menu = document.getElementById('menu');
const $carouselHero = document.getElementById('carouselHero');
const $accordionContainer = document.getElementById('accordion');


const toggleMenu = () => {
    const $mainHeader = document.getElementById('mainHeader');
    $menu.classList.toggle('nav-container--visible');
    if (innerWidth < 1440) $mainHeader.classList.toggle('header--sticky');
}

$hamburgerButton.addEventListener('click', toggleMenu);
$closeButton.addEventListener('click', toggleMenu);

$menu.addEventListener('click', e => {
    if (e.target.matches('.nav__link')) {
        toggleMenu();
    }
});

const changeActiveHero = indexToActive => {
    const $navItems = [...document.getElementById('carouselHero').children];
    const $heros = [...document.getElementById('hero2').children];
    const $sections = [...document.getElementById('section5').children];

    $heros.forEach(($e, i) => {
        $navItems[i].classList.remove('nav__item--active')
        $e.classList.remove('hero__img--visible');
        $sections[i].classList.add('section--invisible');
    });
    $navItems[indexToActive].classList.add('nav__item--active');
    $heros[indexToActive].classList.add('hero__img--visible');
    $sections[indexToActive].classList.remove('section--invisible');
    $sections[indexToActive].classList.add('section--visible');
}

$carouselHero.addEventListener('click', e => {

    if (e.target.matches('.nav__item--carousel')) {
        e.target.classList.add('nav__item--active');
        changeActiveHero(e.target.dataset.id);
    }
});

const changeActiveAccordion = element => {
    element.classList.toggle('accordion--active');
}

$accordionContainer.addEventListener('click', e => {
    if (e.target.matches('.accordion__title')) {
        changeActiveAccordion(e.target.parentElement);
    }
});

const validateForm = (value) => {
    const regexp = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    const cleanValue = value.trim();
    return regexp.test(cleanValue);
}

input.addEventListener('keyup', e => {
    const value = e.target.value;
    if (validateForm(value)) {
        e.target.parentElement.classList.remove('input-container--error');
    } else {
        e.target.parentElement.classList.add('input-container--error');

    }
});

form.addEventListener('submit', e => {

    e.preventDefault();
    if (validateForm(e.target.contact.value)) {
        e.target.submit();
    }

});








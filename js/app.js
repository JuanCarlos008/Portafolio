import galery from '../js/store.js';

const items = document.querySelectorAll('.item');
const nav = document.getElementById('nav');
const sections = ['home', 'about-me', 'skills', 'my-work', 'contact'];

const hamburger = document.getElementById('hamburger');
const container = document.getElementById('container')
const gridWork = document.getElementById('grid-work');

const $visorImg = document.getElementById('visor');
const $visorContainer = document.getElementById('visor-container');
const $closeVisor = document.getElementById('hamburger-visor');

/* console.log(gridWork) */
gridWork.addEventListener('click', (e) =>{
    const dt = e.target.dataset.work,
        $fragment = document.createDocumentFragment();

    if(dt){
        galery.forEach((galeryImg) => {
            if(galeryImg.category === dt){
                const $img = document.createElement('img'),
                    $figure = document.createElement('figure'),
                    $figcaption = document.createElement('figcaption'),
                    $text = document.createTextNode(galeryImg.title);

                    $img.setAttribute('src', galeryImg.img);
                    $img.setAttribute('alt', galeryImg.title);
                    $figcaption.appendChild($text);

                    $figure.classList.add('item-visor');
                    $figure.appendChild($img);
                    $figure.appendChild($figcaption);

                    $fragment.appendChild($figure);
            }
        })
        $visorImg.appendChild($fragment);
        $visorContainer.classList.add('show')
    }

})

$closeVisor.addEventListener('click', () => {
    $visorContainer.classList.remove('show');
    $visorImg.innerHTML = '';
})

/* Funcion mostrar y ocultar el nav */
const handleToggle = () => {
    nav.classList.toggle('show');
    hamburger.classList.toggle('change');
    container.classList.toggle('blur');
}

hamburger.addEventListener('click', handleToggle);

nav.addEventListener('click', () => {
    if(nav.classList.contains('show') 
    && hamburger.classList.contains('change')
    && container.classList.contains('blur')){
        nav.classList.remove('show');
        hamburger.classList.remove('change');
        container.classList.remove('blur');
    }
})



/* Funcines para cambiar la selección en el nav dependiendo la sección */
const handleNav = (section) =>{
    for(let i = 0; i < items.length; i++){
        items[i].classList.remove('active');
    }
    document.querySelector(`.item[href="#${section}"]`).classList.add('active')
}

const handleScrollNav = (fromTop) =>{
    sections.forEach(section => {
        let searchS = document.getElementById(section);
        console.log(`offsetTop  ${searchS.getAttribute('id')}  ${searchS.offsetTop}`);
        console.log("fromTop", fromTop);
        console.log(searchS.offsetTop + searchS.offsetHeight);
        if(searchS.offsetTop <= fromTop && 
            (searchS.offsetTop + searchS.offsetHeight) - 100 > fromTop){
            handleNav(section);
        }
    })
}

/* Detectando el scroll */
const handleScroll = () =>{
    let fromTop = window.scrollY;

        if(fromTop > 50){
            nav.classList.add('scroll')
        }else{
            nav.classList.remove('scroll')
        }

    handleScrollNav(fromTop);
}


handleScroll();
window.addEventListener('scroll', handleScroll)



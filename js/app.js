import handleWorksView from './modulos/grid_work.js';
import handleScroll from './modulos/scroll.js';
import handleScrollSpy from './modulos/scroll_spy.js';
import handleNavToggle from './modulos/toggle_nav.js';

document.addEventListener('DOMContentLoaded', ()=> {
    handleNavToggle('#hamburger', '#container', '#nav');
    handleScrollSpy();
    handleWorksView('grid-work', 'visor-container', 'visor', '#hamburger-visor');
    handleScroll('nav');
})




const $d = document;

export default function handleNavToggle(idToggle, idContainer, idNav){
    const $toggle = $d.querySelector(idToggle),
        $nav = $d.querySelector(idNav),
        $container = $d.querySelector(idContainer);


    const changeClass = ()=>{
        $toggle.classList.toggle('change');
        $nav.classList.toggle('show');
        $container.classList.toggle('blur');
    }    

    $d.addEventListener('click', e => {
        if(e.target.matches(idToggle)){
            changeClass()
        }

        if(e.target.matches('.item') && $nav.classList.contains('show')){
            changeClass();
        }
    })
}
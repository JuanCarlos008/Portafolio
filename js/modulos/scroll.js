const $d = document;

export default function handleScroll(nav){
    const $nav = $d.getElementById(nav)
    window.addEventListener('scroll', e =>{
        if(window.scrollY > 50){
            $nav.classList.add('scroll')
        }else{
            $nav.classList.remove('scroll')
        }
    })
}
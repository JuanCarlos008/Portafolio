const $d = document;

export default function handleScrollSpy(){
    const $sections = $d.querySelectorAll('.container [data-scroll-spy]');

    const callback = entries =>{
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                $d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.add('active');
            }else{
                $d.querySelector(`a[href="#${id}"][data-scroll-spy]`).classList.remove('active');
            }
        });
    }

    const observer = new IntersectionObserver(callback, {threshold: 0.5});
    $sections.forEach($section => observer.observe($section));
}
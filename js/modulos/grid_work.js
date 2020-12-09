import galery from '../modulos/store.js';

const $d = document;
export default function handleWorksView(gridWork, visorContainer, visor, hamburgerVisor){
    const $visorContainer = $d.getElementById(visorContainer),
        $visor = $d.getElementById(visor),
        $gridWork = $d.getElementById(gridWork);

    $gridWork.addEventListener('click', (e) =>{
        const dt = e.target.dataset.work,
            $fragment = document.createDocumentFragment();
    
        if(dt){
            galery.forEach((galeryImg) => {
                if(galeryImg.category === dt){
                    const $img = document.createElement('img'),
                        $a = document.createElement('a'),
                        $figure = document.createElement('figure'),
                        $figcaption = document.createElement('figcaption'),
                        $text = document.createTextNode(galeryImg.title);
    
                        $img.setAttribute('src', galeryImg.img);
                        $img.setAttribute('alt', galeryImg.title);
    
                        $a.setAttribute('href', galeryImg.link);
                        $a.setAttribute('target', '_blank');
                        $a.appendChild($img);
    
                        $figcaption.appendChild($text);
    
                        $figure.classList.add('item-visor');
                        $figure.appendChild($a);
                        $figure.appendChild($figcaption);
    
                        $fragment.appendChild($figure);
                }
            })
            $visor.appendChild($fragment);
            $visorContainer.classList.add('show')
        }
    
    })
    

    $d.addEventListener('click', e =>{
        if(e.target.matches(hamburgerVisor)){
            $visorContainer.classList.remove('show');
            $visorImg.innerHTML = '';
        }
    })

}
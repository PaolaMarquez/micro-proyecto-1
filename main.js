const googleButton = document.getElementById('gButton');
const facebookButton = document.getElementById('fButton');
const instagramButton = document.getElementById('iButton');
const resultsBoxElem = document.getElementById("results");
// const botonExperience = document.getElementById("botonExperience");
const info = [
    {
        name: "Google",
        tecnology: "Python",
        date: "21/06/1996",
        link: "https://www.google.com/",
        image: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
    },
    {
        name: "Facebook",
        tecnology: "Java",
        date: "02/05/2017",
        link: "https://www.facebook.com/",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
    },
    {
        name: "Instagram",
        tecnology: "JavaScript",
        date: "14/03/2013",
        link: "https://www.instagram.com/",
        image: "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
    }
]


window.onload = function () {
    const IMAGENES = [
        'https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg',
        'https://img.freepik.com/vector-gratis/parque-infantil-blanco-toboganes-escena_1308-53112.jpg?w=2000',
        'https://www.hola.com/imagenes/decoracion/20211230202142/cultivar-palmeras-exterior-mc/1-36-318/cuidados-palmeras-exterior-e.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 2000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');
    }

    function stopIntervalo() {
        clearInterval(intervalo);
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    renderizarImagen();
} 

// ----------

function finestraSecundaria (url){
    window.open(url,"__blank")
}
// resultsBoxElem.classList.remove("hide");
googleButton.addEventListener('click', () =>{

    resultsBoxElem.innerHTML=`
    <divx>
        <p class="titulo">${info[0].name}</p>
        <div class="results">
        <button type="button" class="value"> Tecnología: ${info[0].tecnology}</button>
        <button type="button" class="value"> Fecha: ${info[0].date}</button>
        </div>
        <div class = "results">
        <button type="button" class="value" id="botonExperience" onclick= "javascript:finestraSecundaria('https://www.google.com')" >Ir al sitio</button>
        </div>
    </divx>
    `;
    let botonExperience = document.getElementById("botonExperience");
})

facebookButton.addEventListener('click', () =>{

    resultsBoxElem.innerHTML=`
    <div>
        <p class="titulo">${info[1].name}</p>
        <div class="results">
        <button type="button" class="value"> Tecnología: ${info[1].tecnology}</button>
        <button type="button" class="value"> Fecha: ${info[1].date}</button>
        </div>
        <div class = "results">
        <button type="button" class="value" id="botonExperience" onclick= "javascript:finestraSecundaria('https://www.facebook.com')" >Ir al sitio</button>
        </div>
    </div>
    `;
    let botonExperience = document.getElementById("botonExperience");
})

instagramButton.addEventListener('click', () =>{

    resultsBoxElem.innerHTML=`
    <div>
        <p class="titulo">${info[2].name}</p>
        <div class="results">
        <button type="button" class="value"> Tecnología: ${info[2].tecnology}</button>
        <button type="button" class="value"> Fecha: ${info[2].date}</button>
        </div>
        <div class = "results">
        <button type="button" class="value" id="botonExperience" onclick= "javascript:finestraSecundaria('https://www.instagram.com')" >Ir al sitio</button>
        </div>
    </div>
    `;
})

  




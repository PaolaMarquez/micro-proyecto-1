const googleButton = document.getElementById('gButton');
const facebookButton = document.getElementById('fButton');
const instagramButton = document.getElementById('iButton');
const resultsBoxElem = document.getElementById("results");
const nombreInput = document.getElementById("nombre")
const apellidoInput = document.getElementById("apellido")
const emailInput = document.getElementById("email")
const msgInput = document.getElementById("msg")
const submit = document.getElementById("submit")
// const starsNivel0 = document.getElementById("stars_nivel_0");
// const starsNivel1 = document.getElementById("stars_nivel_1");
// const calculateSkills = document.getElementById("calculate_skills");
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

const skills = [
    {name: "Python", stars:5, nivel:0},
    {name: "Java", stars:3, nivel:0},
    {name: "HTML", stars:2, nivel:1},
    {name: "JavaScript", stars:2, nivel:1},
    {name: "CSS", stars:1, nivel:1},

]

window.onload = function () {
    const imagenes = [
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        'https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1610563166150-b34df4f3bcd6%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxzZWFyY2h8Mnx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHx8fDE2NzU0MzgzNzY%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dsoftware%252520engineer%26blend%3D000000',
        './carrusel1.1.png',
        
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
        if(posicionActual >= imagenes.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = imagenes.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${imagenes[posicionActual]})`;
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

function newTab (url){
    window.open(url,"__blank")
}
// resultsBoxElem.classList.remove("hide");
googleButton.addEventListener('click', () =>{

    resultsBoxElem.innerHTML=`
    <divx>
        <p class="titulo sub-titulo">${info[0].name}</p>
        <div class="results">
        <button type="button" class="value"> Tecnología: ${info[0].tecnology}</button>
        <button type="button" class="value"> Fecha: ${info[0].date}</button>
        </div>
        <div class = "results">
        <button type="button" class="value" id="botonExperience" onclick= "javascript:newTab('https://www.google.com')" >Ir al sitio</button>
        </div>
    </divx>
    `;
    let botonExperience = document.getElementById("botonExperience");
})

facebookButton.addEventListener('click', () =>{

    resultsBoxElem.innerHTML=`
    <div>
        <p class="titulo sub-titulo">${info[1].name}</p>
        <div class="results">
        <button type="button" class="value"> Tecnología: ${info[1].tecnology}</button>
        <button type="button" class="value"> Fecha: ${info[1].date}</button>
        </div>
        <div class = "results">
        <button type="button" class="value" id="botonExperience" onclick= "javascript:newTab('https://www.facebook.com')" >Ir al sitio</button>
        </div>
    </div>
    `;
    let botonExperience = document.getElementById("botonExperience");
})

instagramButton.addEventListener('click', () =>{

    resultsBoxElem.innerHTML=`
    <div>
        <p class="titulo sub-titulo">${info[2].name}</p>
        <div class="results">
        <button type="button" class="value"> Tecnología: ${info[2].tecnology}</button>
        <button type="button" class="value"> Fecha: ${info[2].date}</button>
        </div>
        <div class = "results">
        <button type="button" class="value" id="botonExperience" onclick= "javascript:newTab('https://www.instagram.com')" >Ir al sitio</button>
        </div>
    </div>
    `;
})

// ----------

// ----------
submit.addEventListener('click', ()=>{
    const name = nombreInput.value;
    const last_name = apellidoInput.value;
    const mail = emailInput.value;
    const msg = msgInput.value;
    const valido = validar(name, last_name, mail)
    let msg_imprimir = ``
    if (valido){
        msg_imprimir = `Su solicitud ha sido enviada!\nNombre: ${name}\nApellido: ${last_name}\nCorreo: ${mail}`;
    }else{
        msg_imprimir = `El formulario no fue enviado!\nIntrodujo datos inválidos`;
    }
    
    alert(msg_imprimir);
})

function validar(name, last_name, mail){
    let valido = true;
    valido = mail;if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail))){ return false;};
    valido = mail;if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail))){ return false;};
    return valido;    
}

/** Formulario de contacto */
const datosform = {
    nombre: '',
    email: '',
    mensaje: '',
}
const formulario = document.querySelector('.formulario');
const nombre=document.querySelector('#nombre');
const email=document.querySelector('#email'); 
const mensaje=document.querySelector('#mensaje'); 

/** Evento de los inputs y text area */
nombre.addEventListener('input',leetexto);
email.addEventListener('input',leetexto);
mensaje.addEventListener('input',leetexto);
/**Evento de submit */
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    //validar formulario
    const {nombre,email,mensaje} = datosform;
    
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarmensaje('llena todos los campos',true);
        return;
    }
        
    //enviar formulario
    mostrarmensaje('Enviando formulario');
});

function leetexto(e){
    datosform[e.target.id]=e.target.value;      //darle un valor a cada atributo del obj
    
    console.log(datosform);
}


//mostrar alerta
function mostrarmensaje(mensaje,error=null){
    const alerta = document.createElement('P');
    alerta.textContent=mensaje;

    if (error) {
        alerta.classList.add('error');
    } else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove;                          //desaparece en 3 segundos
    }, 3000);
}
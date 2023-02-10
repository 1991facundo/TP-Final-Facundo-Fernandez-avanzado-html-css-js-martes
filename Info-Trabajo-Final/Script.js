// let play = document.querySelector('#play')
// let pausa = document.querySelector('#pausa')
let video = document.querySelector('#video')
let tiempoVideo = document.querySelector('#tiempoVideo')

// tiempoVideo.innerText = video.duration

// console.log(tiempoVideo)

document.addEventListener('click', (e) => {

    const target = e.target

    if (target.matches('#play')|| target.matches('#play img')) {
        video.play()

        const duration = video.duration / 60
        console.log(duration)
        const minutes = Math.trunc(duration)
        console.log(minutes)
        const minutesOff = duration - minutes
        console.log(minutesOff)
        const seconds = Math.trunc(minutesOff * 60)
        console.log(seconds)
        tiempoVideo.innerText = `Duracion total del video: ${minutes}: ${seconds}`


    }

    if (target.matches('#play img')) {
        video.play()

        const duration = video.duration / 60
        console.log(duration)
        const minutes = Math.trunc(duration)
        console.log(minutes)
        const minutesOff = duration - minutes
        console.log(minutesOff)
        const seconds = Math.trunc(minutesOff * 60)
        console.log(seconds)
        tiempoVideo.innerText = `Duracion total del video: ${minutes}: ${seconds}`
    }

    if (target.matches('#pausa')) {
        // alert("hiciste pausa")
        video.pause()
    }

    if (target.matches('#pausa img')) {
        video.pause()
    }

})

// DRAG & DROP

// Imagenes 

let imagenIzquierda= document.querySelector('#img1')
let imagenCentro = document.querySelector('#img2')
let imagenDerecha = document.querySelector('#img3')

// Destinos

let destinoIzquierda= docuemnt.querySelector('#destino1')
let destinoCentro = docuemnt.querySelector('#destino2')
let destinoDerecha = docuemnt.querySelector('#destino3')

// Traslados

imagenIzquierda.addEventListener('dragstart', inicioTraslado1)
imagenCentro.addEventListener('dragstart', inicioTraslado2)
imagenDerecha.addEventListener('dragstart', inicioTraslado3)

function inicioTraslado1 (event){
    event.dataTransfer.setData('Text', "./assets/imagenes/Rompe1.png")
}

function inicioTraslado2(event) {
    event.dataTransfer.setData('Text', "./assets/imagenes/Rompe2.png")
}

function inicioTraslado3(event) {
    event.dataTransfer.setData('Text', "./assets/imagenes/Rompe3.png")
}

function finalTraslado(event){

    let imagen = event.target;
    imagen.style.visibility="hidden"
}

// DESTINO FINALES

destinoIzquierda.addEventListener('dragover', prevenirDefaultIzq)
destinoIzquierda.addEventListener('drop', soltarElementoIzq)

function soltarElementoIzq (event) {
    let solElIzq = event.dataTransfer.getData('Text');
    destinoIzquierda.innerHtml = `img id="img1" src="${solElIzq}"/>`
}

function prevenirDefaultIzq(event){
    event.preventDefault()
}
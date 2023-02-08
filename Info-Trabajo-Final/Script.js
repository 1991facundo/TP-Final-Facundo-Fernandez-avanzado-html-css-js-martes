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


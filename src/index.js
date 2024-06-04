import './style.scss';

const audioF = new Audio('./sounds/summer.mp3')
const audioS = new Audio('./sounds/rain.mp3')
const audioT = new Audio('./sounds/winter.mp3');

const range = document.getElementById('range')
const num = document.querySelector('.weather__span')


function changeWeather() {
    let first = document.querySelector('.weather__block_first')
    let second = document.querySelector('.weather__block_second')
    let third = document.querySelector('.weather__block_third')


    first.addEventListener('click', () => {
        if (audioF.paused) {
            audioF.play()
                .then(r => r)
            range.value = audioF.volume
            num.innerHTML = audioF.volume.toFixed()
            audioF.volume = 0.1
            audioS.pause()
            audioT.pause()
            document.body.style.backgroundImage = "url('./images/summer-bg.jpg')"
            range.removeAttribute('disabled')
            range.oninput = () => {
                audioF.volume = range.value / 100
                num.innerHTML = range.value
            }
        } else {
            audioF.pause()
            range.value = 0
            num.innerHTML = '0'
            range.setAttribute('disabled', 'disabled')
        }
    })
    second.addEventListener('click', () => {
        if (audioS.paused) {
            audioS.play()
                .then(r => r)
            audioS.volume = 0.1
            range.value = 0
            num.innerHTML = audioF.volume.toFixed()
            audioF.pause()
            audioT.pause()
            document.body.style.backgroundImage = "url('./images/rainy-bg.jpg')"
            range.removeAttribute('disabled')
            range.oninput = () => {
                audioS.volume = range.value / 100
                num.innerHTML = range.value
            }
        } else {
            audioS.pause()
            range.value = 0
            num.innerHTML = '0'
            range.setAttribute('disabled', 'disabled')

        }
    })
    third.addEventListener('click', () => {
        if (audioT.paused) {
            audioT.play()
                .then(r => r)
            audioT.volume = 0.1
            range.value = 0
            num.innerHTML = audioF.volume.toFixed()
            audioS.pause()
            audioF.pause()
            document.body.style.backgroundImage = "url('./images/winter-bg.jpg')"
            range.removeAttribute('disabled')
            range.oninput = () => {
                audioT.volume = range.value / 100
                num.innerHTML = range.value
            }
        } else {
            audioT.pause()
            range.value = 0
            num.innerHTML = '0'
            range.setAttribute('disabled', 'disabled')

        }
    })
}

changeWeather()










const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const back = document.getElementById('back')
const forward = document.getElementById('forward')

let currentActive = 1;

forward.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

back.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

const update = () => {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        } else if (index >= currentActive) {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
}

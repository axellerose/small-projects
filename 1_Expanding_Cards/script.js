// TODO

// Container 5 panels with a bg-image and h3 title

// Muli font

// panel styles

//panel h3 in botom-left corner

//set panel active class

//@media form small 480 px > make container bigger, hide last 2 cards

// add card extension

const cards = document.querySelectorAll('.panel')

const removeActiveClasses = () => {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses()
        card.classList.add('active')
    })
})
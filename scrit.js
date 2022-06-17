const slides = document.querySelectorAll('.slide')

for (const elementSlide of slides) {
    elementSlide.addEventListener('click', () => {
        removeClasses_Active()
        elementSlide.classList.add('active')
    })
}

function removeClasses_Active() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
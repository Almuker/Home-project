const content = [
    {
        id: 1,
        tabTitle: 1,
        tabContent: '<p class="text_in_slide">Music <i id="for">for</i> <br> Everyone</p>',
        tabImg: "url(images/backgrounds/Slider.jpg)"
    },

    {
        id: 2,
        tabTitle: 2,
        tabContent: '<p class="text_in_slide">Discover <i id="for">Your</i> <br> Inner Talents</p>',
        tabImg: "url(images/backgrounds/Slider2.jpg)"
    },

    {
        id: 3,
        tabTitle: 3,
        tabContent: '<p class="text_in_slide">Pick <i id="for">Your</i> <br> Instrument</p>',
        tabImg: "url(images/backgrounds/Slider3.jpg)"

    }
]

let buttons = ''

for(let item of content) {
    buttons += `<button class = "tab_btn"> ${item.tabTitle} </button>`
}

document.querySelector('.tab_navs').innerHTML = buttons

let contentDiv = document.querySelector('.tab_content')

let tabBtns = document.querySelectorAll('.tab_btn')

let tabImg = document.querySelector('.music_for_everyone')

tabBtns[0].classList.add('active_btn')

for(let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener('click', function() {
        removeActive()
        contentDiv.innerHTML = content[i].tabContent
        tabImg.style.backgroundImage = content[i].tabImg
        tabBtns[i].classList.add('active_btn')
    })
}

function removeActive() {
    for (let elements of tabBtns) {
        elements.classList.remove('active_btn')
    }
}

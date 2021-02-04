let modal = document.querySelector('.modal_window')
let nav_modal = document.querySelector('.nav_window')

function toggleModal(action) {  
    if (action === 'open') {
        modal.classList.add('active')
    } else {
        modal.classList.remove('active')
    }
}

function toggleModalNav(action) {
    if (action === 'open') {
        nav_modal.classList.add('active')
    } else {
        nav_modal.classList.remove('active')
    }
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove('active')
    }
    if (event.target === nav_modal) {
        nav_modal.classList.remove('active')
    }
}
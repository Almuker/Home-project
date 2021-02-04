function toggleModal(action) {
    let modal = document.querySelector('.modal_window')
    if (action === 'open') {
        modal.classList.add('active')
    } else {
        modal.classList.remove('active')
    }
}

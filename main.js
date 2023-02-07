const
    modal = document.querySelector('.modal'),
    modalOpen = document.querySelector('.block__btn'),
    modalClose = document.querySelector('.modal-close')

modalOpen.addEventListener('click', () => modal.classList.add('active'))
modalClose.addEventListener('click', () => modal.classList.remove('active'))
window.onclick = e => {
    if (e.target === modal) modal.classList.remove('active')
}
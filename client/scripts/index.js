function toggleMenu() {
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('show');
}

const closeIcon = document.createElement('div');
closeIcon.className = 'close-icon';
closeIcon.innerHTML = 'X';
closeIcon.addEventListener('click', toggleMenu);
document.querySelector('.header-nav').appendChild(closeIcon);

const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.open')
const menu=document.querySelector('.menu')

closeMenu.addEventListener('click', () => {
    menu.classList.add('hidden');
    menu.style.display='none'
});

openMenu.addEventListener('click', () => {
    menu.classList.remove('hidden');
    menu.style.display='block'
});

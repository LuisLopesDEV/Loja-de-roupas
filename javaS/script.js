const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');
const ajuda = document.querySelector('.ajuda');
const intitucional = document.querySelector('.institucional');
const iconDownAjuda = document.querySelector('.iconDown_ajuda');
const iconDownInst = document.querySelector('.iconDown_inst');



openMenu.addEventListener('click', () => {
    menu.classList.remove('hidden');
    setInterval(() => {
        menu.style.display = 'block'
    }, 10)
});


closeMenu.addEventListener('click', () => {
    menu.classList.add('hidden');
    setTimeout(() => {
        menu.style.display = 'none';
    }, 1500);
});

ajuda.addEventListener('click', () => {
    const existingIconUp = ajuda.querySelector('.bi-chevron-up');
    const existingIconDown = ajuda.querySelector('.iconDown_ajuda');

    

    const iconUp = document.createElement('i')
    iconUp.classList.add("bi")
    iconUp.classList.add("bi-chevron-up")


    if (existingIconUp) {
        ajuda.removeChild(existingIconUp);
        ajuda.appendChild(iconDownAjuda);

        document.querySelector('.ajudaOpt').style.display='block';
    }

    if (existingIconDown) {
        ajuda.removeChild(existingIconDown);
        ajuda.appendChild(iconUp);

        document.querySelector('.ajudaOpt').style.diplay = 'none';
        console.log(ajudaOpt)
    }

})
intitucional.addEventListener('click', () => {
    const iconUp = document.createElement('i')
    iconUp.classList.add("bi")
    iconUp.classList.add("bi-chevron-up")

    const existingIconUp = intitucional.querySelector('.bi-chevron-up');
    const existingIconDown = intitucional.querySelector('.iconDown_inst');

    if (existingIconUp) {
        intitucional.removeChild(existingIconUp);
        intitucional.appendChild(iconDown_inst)
    }

    if (existingIconDown) {
        intitucional.removeChild(existingIconDown);
        intitucional.appendChild(iconUp)
    }
})
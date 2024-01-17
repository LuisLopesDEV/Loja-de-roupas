const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.closeMenu');
const menu = document.querySelector('.menu');

const ajuda = document.querySelector('.ajuda');
const intitucional = document.querySelector('.institucional');
const iconDownAjuda = document.querySelector('.iconDownAjuda');
const iconDownInst = document.querySelector('.iconDownInst');

let ajudaOpt = document.querySelector('.ajudaOpt')
ajudaOpt.style.display = 'none';
let instOpt = document.querySelector('.instOpt')
instOpt.style.display = 'none';

openMenu.addEventListener('click', () => {
    menu.classList.remove('hidden');
    menu.style.display = 'block';
});


closeMenu.addEventListener('click', () => {
    menu.classList.add('hidden');
    setTimeout(() => {
        menu.style.display = 'none';
    }, 1500);
});

const nextBtns = document.querySelectorAll('.nextPag li')
nextBtns.forEach((item) => {
    nextBtns[0].classList.add('selecionado');

    item.addEventListener('click', () => {
        nextBtns.forEach((item) => {
            item.classList.remove('selecionado')
        })
        item.classList.add('selecionado');
        console.log(item);
    })
})


// Footer 
let primeiroClique = true;
ajuda.addEventListener('click', () => {
    const existingIconUp = ajuda.querySelector('.bi-chevron-up');
    const existingIconDown = ajuda.querySelector('.iconDownAjuda');

    const iconUpA = document.createElement('i')
    iconUpA.classList.add("bi")
    iconUpA.classList.add("bi-chevron-up")

    let ajudaOpt = document.querySelector('.ajudaOpt')
    ajudaOpt.style.display = 'none';

    if (existingIconUp) {
        ajuda.removeChild(existingIconUp);
        ajuda.appendChild(iconDownAjuda);
    } else {
        ajuda.removeChild(existingIconDown);
        ajuda.appendChild(iconUpA);
    }

    if (primeiroClique) {
        ajudaOpt.style.display = 'block'
    } else {
        ajudaOpt.style.display = 'none'
    }
    primeiroClique = !primeiroClique;
})

intitucional.addEventListener('click', () => {
    const existingIconUp = intitucional.querySelector('.bi-chevron-up');
    const existingIconDown = intitucional.querySelector('.iconDownInst');

    const iconUp = document.createElement('i')
    iconUp.classList.add("bi")
    iconUp.classList.add("bi-chevron-up")

    let instOpt = document.querySelector('.instOpt')
    instOpt.style.display = 'none';

    if (existingIconUp) {
        intitucional.removeChild(existingIconUp);
        intitucional.appendChild(iconDownInst);
    } else {
        intitucional.removeChild(existingIconDown);
        intitucional.appendChild(iconUp);
    }

    if (primeiroClique) {
        instOpt.style.display = 'block'
    } else {
        instOpt.style.display = 'none'
    }
    primeiroClique = !primeiroClique;
})
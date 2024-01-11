const Cores = {
    BRANCA: 'branca',
    PRETA: 'preta',
    BEGE: 'bege',
    VERDE_MUSGO: 'verde musgo',
    VERDE: 'verde',
    JEANS: 'jeans',
    AZUL: 'azul',
    MARROM: 'marrom',
    CINZA: 'cinza',
};

const Tamanhos = {
    P: 'P',
    M: 'M',
    G: 'G',
    GG: 'GG',
    XGG: 'XGG'
};
const Sex = {
    MAN: 'man',
    FEM: 'fem'
}
const Types = {
    POLO: 'polo',
    MOLETOM: 'moletom',
    VESTIDO: 'vestido',
    SAIA: 'saia',
    BLUSA: 'blusa',
    JEANS: 'jeans',
}

const itens = [
    {
        nome: 'Camisa Polo Masculina Manga Longa Branca',
        tamanho: [Tamanhos.P, Tamanhos.M, Tamanhos.GG],
        cor: [Cores.BRANCA],
        tipo: Types.POLO,
        sexo: Sex.MAN,
        preco: 'R$ 100,99',
        imagem: 'Images/Polo/Camisa Polo Masculina Manga Longa Branca.jpg'
    },

    // {
    //     nome: 'Camisa Polo Masculina Manga Longa Branca',
    //     tamanho: [Tamanhos.P, Tamanhos.M, Tamanhos.GG],
    //     cor: [Cores.BRANCA],
    //     tipo: Types.POLO,
    //     sexo: Sex.MAN,
    //     preco: 'R$ 100,99',
    //     imagem: 'Images/Polo/Camisa Polo Masculina Manga Longa Branca.jpg'
    // },

    {
        nome: 'Saia Midi Evasê Com Linho Bege',
        tamanho: [Tamanhos.P, Tamanhos.M, Tamanhos.G],
        cor: Cores.BEGE,
        tipo: Types.SAIA,
        sexo: Sex.FEM,
        preco: 'R$ 100,99',
        imagem: 'Images/Saia/Saia Midi Evasê Com Linho Bege.jpg'
    },

    {
        nome: 'Vestido Verde Musgo Fases Da Lua',
        tamanho: [Tamanhos.P, Tamanhos.M],
        cor: [Cores.VERDE_MUSGO],
        tipo: Types.VESTIDO,
        sexo: Sex.FEM,
        preco: 'R$ 100,99',
        imagem: 'Images/Vestido/Vestido Verde Musgo Fases Da Lua.jpg'
    },
    {
        nome: 'Calça Jeans Wideleg Pantalona Premium',
        tamanho: [Tamanhos.P, Tamanhos.M, Tamanhos.G, Tamanhos.GG],
        cor: [Cores.JEANS],
        tipo: Types.JEANS,
        sexo: Sex.FEM,
        preco: 'R$ 100,99',
        imagem: 'Images/Jeans/Calça Jeans Wideleg Pantalona Premium.jpg'
    },
    {
        nome: 'Blusa Verde Com Mangas Duplas - QUintess',
        tamanho: [Tamanhos.P, Tamanhos.M, Tamanhos.G, Tamanhos.GG],
        cor: [Cores.VERDE],
        tipo: [Types.BLUSA],
        sexo: [Sex.FEM],
        preco: 'R$ 100,99',
        dividir: '5x R$ 20,00 sem juros',
        imagem: 'Images/Blusa/Blusa Verde Com Mangas Duplas - QUintess.jpg'
    },


    {
        nome: 'Moletom Feminino Blusa de Frio com Capuz New York',
        tamanho: [Tamanhos.P, Tamanhos.M, Tamanhos.G, Tamanhos.GG],
        cor: [Cores.BRANCA, Cores.PRETA, Cores.AZUL],
        tipo: Types.MOLETOM,
        sexo: [Sex.FEM],
        preco: 'R$ 100,99',
        imagem: 'Images/Moletom/Moletom Feminino Blusa de Frio com Capuz New York - adn - Moletom  Blusão Feminino.jpg'
    },

    {
        nome: 'Moletom BasicLogo',
        tamanho: [Tamanhos.P, Tamanhos.M, Tamanhos.G, Tamanhos.GG],
        cor: [Cores.BRANCA, Cores.PRETA, Cores.AZUL],
        tipo: Types.MOLETOM,
        sexo: [Sex.FEM],
        preco: 'R$ 100,99',
        imagem: 'Images/Moletom/Moletom BasicLogo.jpg'
    },

    {
        nome: 'Moletom Canguru Streetwear 2 Cabos - Bege',
        tamanho: [Tamanhos.P, Tamanhos.M, Tamanhos.G],
        cor: [Cores.BEGE, Cores.MARROM],
        tipo: Types.MOLETOM,
        sexo: Sex.MAN,
        preco: 'R$ 100,99',
        imagem: 'Images/Moletom/Moletom Canguru Streetwear 2 Cabos - Bege.jpg'
    },

    {
        nome: 'Moletom com zíper Carta Gráfica',
        tamanho: [Tamanhos.P, Tamanhos.M],
        cor: [Cores.VERDE],
        tipo: Types.MOLETOM,
        sexo: Sex.FEM,
        preco: 'R$ 100,99',
        imagem: 'Images/Moletom/Moletom com zíper Carta Gráfica.jpg'
    },

    {
        nome: 'Moletom Masculino Marrom Boys',
        tamanho: [Tamanhos.P, Tamanhos.M, Tamanhos.G, Tamanhos.GG],
        cor: [Cores.MARROM, Cores.PRETA],
        tipo: Types.MOLETOM,
        sexo: Sex.MAN,
        preco: 'R$ 100,99',
        imagem: 'Images/Moletom/Moletom Masculino Marrom Boys.jpg'
    },
    {
        nome: 'Camisa Moletom Nike Unisex',
        tamanho: [Tamanhos.P, Tamanhos.M, Tamanhos.G, Tamanhos.GG],
        cor: [Cores.BRANCA, Cores.PRETA, Cores.CINZA],
        tipo: [Types.MOLETOM],
        sexo: [Sex.MAN],
        preco: 'R$ 100,99',
        dividir: '5x R$ 20,00 sem juros',
        imagem: 'Images/Moletom/Camisa Moletom Nike Unisex.jpg'
    },
]

// [Tamanhos.P, Tamanhos.M, Tamanhos.G, Tamanhos.GG]

// [Cores.BRANCA, Cores.PRETA, Cores.BEGE, Cores.VERDE_MUSGO, Cores.JEANS, Cores.VERDE]

// [Types.POLO, Types.MOLETOM, Types.VESTIDO, Types.SAIA, Types.BLUSA, Types.JEANS]

// [Sex.MAN, Sex.FEM]
console.log(itens)

const container = document.querySelector('.container');
const banner = document.querySelector('.banner');
const itensPerLoad = 6;
let currentLoad = 1;

function displayItensBefore() {
    const start = Math.max((currentLoad - 1) * itensPerLoad, 0);
    const end = currentLoad * itensPerLoad;
    const currentItems = itens.slice(start, end);

    currentItems.forEach(item => {
        const box_itens = document.createElement('div');
        box_itens.classList.add('box-itens');

        const imagem = document.createElement('img');
        imagem.src = item.imagem;

        const nome = document.createElement('p');
        nome.classList.add('item-inf');
        nome.textContent = item.nome;

        const preço = document.createElement('h1');
        preço.textContent = item.preco;

        const dividir = document.createElement('p');
        dividir.textContent = item.dividir || '';

        const itemImg = document.createElement('div');
        itemImg.classList.add('item-img');
        itemImg.appendChild(imagem);

        box_itens.appendChild(itemImg);
        box_itens.appendChild(nome);
        box_itens.appendChild(preço);
        box_itens.appendChild(dividir);

        container.insertBefore(box_itens, banner);
    });
}

function displayItensAfter() {
    const start = currentLoad * itensPerLoad;
    const end = (currentLoad + 1) * itensPerLoad;
    const currentItems = itens.slice(start, end);

    currentItems.forEach(item => {
        const box_itens = document.createElement('div');
        box_itens.classList.add('box-itens');

        const imagem = document.createElement('img');
        imagem.src = item.imagem;

        const nome = document.createElement('p');
        nome.classList.add('item-inf');
        nome.textContent = item.nome;

        const preço = document.createElement('h1');
        preço.textContent = item.preco;

        const dividir = document.createElement('p');
        dividir.textContent = item.dividir || '';

        const itemImg = document.createElement('div');
        itemImg.classList.add('item-img');
        itemImg.appendChild(imagem);

        box_itens.appendChild(itemImg);
        box_itens.appendChild(nome);
        box_itens.appendChild(preço);
        box_itens.appendChild(dividir);

        container.appendChild(box_itens);
    });
}

displayItensBefore();
displayItensAfter();

const produtos = [
  {id:1, nome:"Nike Air Force 1 '07", marca:"Nike", preco:759.99, imagem:"https://images.unsplash.com/photo-1597350584914-55bb62285896?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", categoria:"streetwear"},
  {id:2, nome:"Nike Air Max Excee", marca:"Nike", preco:479.99, imagem:"https://images.unsplash.com/photo-1711491559395-c82f70a68bfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", categoria:"casual"},
  {id:3, nome:"Nike JA 3", marca:"Nike", preco:1299.99, imagem:"https://imgnike-a.akamaihd.net/768x768/105170P2A5.jpg", categoria:"esportivo"},
  {id:4, nome:"Nike Air Max SC", marca:"Nike", preco:699.99, imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZr-06IOsyM7jvAKSsnt2D2-K77mn5zhhdBMiocnuaEQ&s=10", categoria:"casual"},
  {id:5, nome:"Nike Revolution 7", marca:"Nike", preco:259.99, imagem:"https://imgnike-a.akamaihd.net/768x768/027284IMA2.jpg", categoria:"corrida"},
  {id:6, nome:"Nike Pegasus 41", marca:"Nike", preco:949.90, imagem:"https://imgnike-a.akamaihd.net/768x768/105525IE.jpg", categoria:"corrida"},
  {id:7, nome:"Nike Court Vision Low", marca:"Nike", preco:399.99, imagem:"https://imgnike-a.akamaihd.net/768x768/058760IF.jpg", categoria:"streetwear"},
  {id:8, nome:"Nike Blazer Mid '77", marca:"Nike", preco:609.00, imagem:"https://imgnike-a.akamaihd.net/768x768/01227151.jpg", categoria:"streetwear"},
  {id:9, nome:"Nike Vomero 17", marca:"Nike", preco:1234.99, imagem:"https://imgnike-a.akamaihd.net/768x768/0586710L.jpg", categoria:"corrida"},
  {id:10, nome:"Nike Air Max 90", marca:"Nike", preco:769.99, imagem:"https://imgnike-a.akamaihd.net/768x768/00931851.jpg", categoria:"casual"},
  {id:11, nome:"Adidas Grand Court 2.0", marca:"Adidas", preco:399.99, imagem:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/fef9a46c36144af1bd45b2060256046d_9366/TENIS_GRAND_COURT_2.0_Preto_GW9196_HM1.jpg", categoria:"streetwear"},
  {id:12, nome:"Adidas Runfalcon 5", marca:"Adidas", preco:499.99, imagem:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/211ac4a4e1b049858c0193c6822ac362_9366/Tenis_Corrida_Runfalcon_5_Branco_JI0872_01_00_standard.jpg", categoria:"corrida"},
  {id:13, nome:"Adidas Samba OG", marca:"Adidas", preco:799.99, imagem:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/22a8fc2d0dcf44dc81f418185fd11ec6_9366/Tenis_Samba_OG_Branco_JK3367_01_00_standard.jpg", categoria:"streetwear"},
  {id:14, nome:"Adidas Campus 00s", marca:"Adidas", preco:699.99, imagem:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e602da27f9604402bbd5b6a43096898d_9366/Tenis_Campus_00s_Cinza_JK3369_01_00_standard.jpg", categoria:"streetwear"},
  {id:15, nome:"Adidas Ultraboost 5", marca:"Adidas", preco:1099.99, imagem:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/2bbf432879114ab898fe92f21b772106_9366/Tenis_Ultraboost_5_Preto_JQ6653_01_00_standard.jpg", categoria:"corrida"},
  {id:16, nome:"Adidas Superstar", marca:"Adidas", preco:599.99, imagem:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/cffc1e722da944b3bfb4573066534e51_9366/Tenis_Superstar_Branco_JK4968_01_00_standard.jpg", categoria:"streetwear"},
  {id:17, nome:"Adidas Forum Low", marca:"Adidas", preco:449.99, imagem:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3faa5029e332454382c3f62d06d6595e_9366/Tenis_Forum_Low_CL_Branco_IH7828_01_standard.jpg", categoria:"streetwear"},
  {id:18, nome:"Adidas Duramo SL", marca:"Adidas", preco:499.99, imagem:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a73975545aa740b19fbeedf6960311e6_9366/Tenis_Corrida_Duramo_SL_2_Branco_IH8215_HM1.jpg", categoria:"corrida"},
  {id:19, nome:"Adidas Adizero SL 2", marca:"Adidas", preco:799.99, imagem:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c3e0043017044f1adbdbe3959658baa_9366/Tenis_Adizero_SL_2_Verde_JI2984_HM1.jpg", categoria:"corrida"},
  {id:20, nome:"Adidas Megaride", marca:"Adidas", preco:999.99, imagem:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1be1a6428f62409f9295eb2cbd96c39d_9366/Tenis_Megaride_Branco_JH5523_01_standard.jpg", categoria:"streetwear"},
  {id:21, nome:"New Balance 574 Core", marca:"New Balance", preco:599.99, imagem:"https://newbrasil.vtexassets.com/arquivos/ids/221657-640-auto/U574_U5748TF.webp?v=639189425293270000&quality=10", categoria:"streetwear"},
  {id:22, nome:"New Balance 530", marca:"New Balance", preco:749.99, imagem:"https://newbrasil.vtexassets.com/arquivos/ids/227284-640-auto/NB530_U5306DH.webp?v=639240505738270000&quality=10", categoria:"streetwear"},
  {id:23, nome:"New Balance 9060", marca:"New Balance", preco:1299.99, imagem:"https://newbrasil.vtexassets.com/arquivos/ids/229014-640-auto/U9060_U90608AP_00.webp?v=639227361900670000&quality=10", categoria:"premium"},
  {id:24, nome:"New Balance 520", marca:"New Balance", preco:579.99, imagem:"https://newbrasil.vtexassets.com/arquivos/ids/227991-640-auto/M520V9_M5209GY.webp?v=639222239886030000&quality=10", categoria:"esportivo"},
  {id:25, nome:"New Balance 2002R", marca:"New Balance", preco:1099.99, imagem:"https://newbrasil.vtexassets.com/arquivos/ids/224475-640-auto/U2002R_U20022JF.webp?v=639282864858130000&quality=10", categoria:"premium"},
  {id:26, nome:" New Balance 991v2", marca:"New Balance", preco:2099.99, imagem:"https://newbrasil.vtexassets.com/arquivos/ids/229838-640-auto/U991V2_U991AC2.webp?v=639228320629830000&quality=10", categoria:"premium"},
  {id:27, nome:"New Balance FuelCell Rebel", marca:"New Balance", preco:999.99, imagem:"https://newbrasil.vtexassets.com/arquivos/ids/212147-640-auto/MRCELV5_MRCEL3UD.webp?v=639250983819230000&quality=10", categoria:"corrida"},
  {id:28, nome:" New Balance 2000 Abzorb", marca:"New Balance", preco:1299.99, imagem:"https://newbrasil.vtexassets.com/arquivos/ids/218612-640-auto/U2000_U20004GM.webp?v=639184490886730000&quality=10", categoria:"premium"},
  {id:29, nome:"New Balance 860v12", marca:"New Balance", preco:899.99, imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL21VUtMiAq8DErZIXZyboxp-JHFs_JmBzpCMpZOKqlQ&s=10", categoria:"streetwear"},
  {id:30, nome:"New Balance 1080v12", marca:"New Balance", preco:1199.99, imagem:"https://newbrasil.vtexassets.com/arquivos/ids/198309-640-auto/W1080V15_W10801L7.webp?v=639047681421700000&quality=10", categoria:"corrida"},
  {id:31, nome:"Puma RS Surge", marca:"Puma", preco:649.99, imagem:"https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/405596/02/sv01/fnd/BRA/fmt/png", categoria:"streetwear"},
  {id:32, nome:"Puma-180", marca:"Puma", preco:699.99, imagem:"https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/402101/18/sv01/fnd/BRA/fmt/png", categoria:"streetwear"},
  {id:33, nome:"Puma Caven 2.0", marca:"Puma", preco:299.99, imagem:"https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/396330/03/sv01/fnd/BRA/fmt/png", categoria:"streetwear"},
  {id:34, nome:"Puma Deviate Nitro 3", marca:"Puma", preco:1899.99, imagem:"https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/313943/01/sv01/fnd/BRA/fmt/png", categoria:"corrida"},
  {id:35, nome:"Puma Velocity Nitro 3", marca:"Puma", preco:1099.99, imagem:"https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/313686/02/sv01/fnd/BRA/fmt/png", categoria:"corrida"},
  {id:36, nome:"Puma Palermo", marca:"Puma", preco:599.99, imagem:"https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/397306/04/sv01/fnd/BRA/fmt/png", categoria:"streetwear"},
  {id:37, nome:" Puma Park Lifestyle Easy SD Bdp Cinza", marca:"Puma", preco:649.99, imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtq1S2HSQ4jr1799aRKwhZNFZYAwE7D3ZdkraJp4t6YA&s=10", categoria:"streetwear"},
  {id:38, nome:"Puma Carina Street", marca:"Puma", preco:439.99, imagem:"https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/394296/54/sv01/fnd/BRA/fmt/png", categoria:"streetwear"},
  {id:39, nome:"Puma Electrify Nitro 3", marca:"Puma", preco:1899.99, imagem:"https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/314157/01/sv01/fnd/BRA/fmt/png?sw=480&q=60", categoria:"corrida"},
  {id:40, nome:"Puma Slipstream", marca:"Puma", preco:599.90, imagem:"https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/391763/06/sv01/fnd/BRA/fmt/png", categoria:"streetwear"},
  {id:41, nome:"Vans Old Skool", marca:"Vans", preco:379.99, imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/hdc/ha7/h00/h00/12898471903262/Midres-Vans-V1002001070011-01.jpg?w=1920&q=100", categoria:"streetwear"},
  {id:42, nome:"Vans Authentic", marca:"Vans", preco:319.99, imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/hd3/h7b/h00/h00/13195394940958/Midres-Vans-V1004001120006-02.jpg?w=750&q=100", categoria:"streetwear"},
  {id:43, nome:"Vans Sk8-Hi", marca:"Vans", preco:449.99, imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/h23/hfc/h00/h00/13310726766622/Midres-Vans-V1002001230081-01.jpg?w=1920&q=100", categoria:"streetwear"},
  {id:44, nome:"Vans Era", marca:"Vans", preco:499.99, imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/hee/h70/h00/h00/13288557314078/Midres-Vans-V1004300600001-01.jpg?w=1920&q=100", categoria:"streetwear"},
  {id:45, nome:"Vans Ultrarange", marca:"Vans", preco:449.99, imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/hcf/hfc/h00/h00/13280790544414/Midres-Vans-V1003551100004-01.jpg?w=1920&q=100", categoria:"casual"},
  {id:46, nome:"Vans knu skool", marca:"Vans", preco:499.99, imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/hcb/h2a/h00/h00/12859397570590/Hires-Vans-V1002002760001-01.jpg?w=1920&q=100", categoria:"streetwear"},
  {id:47, nome:"Vans ultrarange neo", marca:"Vans", preco:899.99, imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/h59/hef/h00/h00/13393856495646/Midres-Vans-V1005900070006-01.jpg?w=1920&q=100", categoria:"streetwear"},
  {id:48, nome:"Vans skate wayvee 2.0", marca:"Vans", preco:699.99, imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/h72/h53/h00/h00/13451856216094/Midres-Vans-V1004600250003-01.jpg?w=1920&q=100", categoria:"streetwear"},
  {id:49, nome:"bmx proof", marca:"Vans", preco:349.99, imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/h10/hff/h00/h00/13003490033694/Midres-Vans-V1004600210002-01.jpg?w=1920&q=100", categoria:"streetwear"},
  {id:50, nome:"skate old skool ", marca:"Vans", preco:599.99, imagem:"https://secure-static.vans.com.br/medias/sys_master/vans/vans/h5d/h02/h00/h00/13258627973150/Midres-Vans-V1004300530011-01.jpg?w=1920&q=100", categoria:"streetwear"},
  {id:51, nome:"LV Tatic Runner", marca:"Louis Vuitton", preco:8550.00, imagem:"https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-tenis-lv-tatic-runner--BWU05FMI20_PM1_Side%20view.png?wid=1090&hei=1090", categoria:"premium"},
  {id:52, nome:"LV Trainer Sneaker", marca:"Louis Vuitton", preco:9750.00, imagem:"https://br.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-trainer-sneaker--B1UQ7CTX20_PM1_Side%20view.png?wid=2400&hei=2400", categoria:"premium"}
];

const $ = id => document.getElementById(id);

const precoBR = valor => valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

const formatarPreco = precoBR;
const carrinho = [];

const imagemReserva = 'https://placehold.co/600x400/FBF6EA/12263F?text=Imagem+indisponivel';

function criarImagem(produto, interativa = false) {
    const img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;
    img.loading = 'lazy';

    img.onerror = () => {
        img.onerror = null;
        img.src = imagemReserva;
    };

    if (interativa) {
        img.tabIndex = 0;
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', 'Ampliar imagem de ' + produto.nome);
    }

    return img;
}

function adicionarAoCarrinho(produto) {
    const item = carrinho.find(p => p.id === produto.id && p.preco === produto.preco);

    if (item) {
        item.quantidade++;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1
        });
    }

    atualizarCarrinho();
    alert(produto.nome + ' foi adicionado ao carrinho!');
}

function atualizarCarrinho() {
    const lista = $('itens-carrinho');

    const quantidade = carrinho.reduce(
        (s, p) => s + p.quantidade, 0
    );

    const total = carrinho.reduce(
        (s, p) => s + p.preco * p.quantidade, 0
    );

    if ($('contador-carrinho')) {
        $('contador-carrinho').textContent = quantidade;
    }

    if ($('total-carrinho')) {
        $('total-carrinho').textContent = precoBR(total);
    }

    if (!lista) return;

    lista.replaceChildren();

    if (!carrinho.length) {
        lista.textContent = 'Seu carrinho está vazio.';
        return;
    }

    carrinho.forEach((item, i) => {
        const linha = document.createElement('div');
        linha.className = 'item-carrinho';

        const nome = document.createElement('p');
        nome.textContent = `${item.nome} (${item.quantidade}x)`;

        const preco = document.createElement('p');
        preco.textContent = precoBR(item.preco * item.quantidade);

        const remover = document.createElement('button');
        remover.type = 'button';
        remover.textContent = 'Remover';

        remover.onclick = () => {
            carrinho.splice(i, 1);
            atualizarCarrinho();
        };

        linha.append(nome, preco, remover);
        lista.append(linha);
    });
}

function criarCarrinho() {
    if ($('area-carrinho')) return;

    const area = document.createElement('aside');
    area.id = 'area-carrinho';

    area.innerHTML = `
        <button type="button" id="abrir-carrinho">
            🛒 Carrinho (<span id="contador-carrinho">0</span>)
        </button>

        <div id="painel-carrinho" hidden>
            <h2>Meu Carrinho</h2>
            <div id="itens-carrinho"></div>
            <p>Total: <strong id="total-carrinho">R$ 0,00</strong></p>
            <button type="button" id="fechar-carrinho">Fechar</button>
        </div>
    `;

    document.body.append(area);

    $('abrir-carrinho').onclick = () => {
        $('painel-carrinho').hidden = !$('painel-carrinho').hidden;
    };

    $('fechar-carrinho').onclick = () => {
        $('painel-carrinho').hidden = true;
    };

    atualizarCarrinho();
}

function abrirDetalhes(produto) {
    let modal = $('modal-produto');

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-produto';
        modal.hidden = true;

        modal.innerHTML = `
            <div class="conteudo-modal"
                 role="dialog"
                 aria-modal="true"
                 aria-labelledby="modal-nome">

                <button type="button" id="fechar-modal">
                    Fechar ✕
                </button>

                <img id="modal-imagem" alt="">
                <p id="modal-marca"></p>
                <h2 id="modal-nome"></h2>
                <p id="modal-descricao"></p>
                <h3 id="modal-preco"></h3>

                <button type="button" id="modal-adicionar">
                    Adicionar ao carrinho
                </button>
            </div>
        `;

        document.body.append(modal);

        $('fechar-modal').onclick = () => {
            modal.hidden = true;
        };

        modal.onclick = e => {
            if (e.target === modal) {
                modal.hidden = true;
            }
        };
    }

    $('modal-imagem').src = produto.imagem;
    $('modal-imagem').alt = produto.nome;
    $('modal-marca').textContent = produto.marca;
    $('modal-nome').textContent = produto.nome;

    $('modal-descricao').textContent =
        `Tênis da categoria ${produto.categoria}, da marca ${produto.marca}.`;

    $('modal-preco').textContent = precoBR(produto.preco);

    $('modal-adicionar').onclick = () => {
        adicionarAoCarrinho(produto);
    };

    modal.hidden = false;
}

function mostrarProdutos() {
    const lista = $('lista-produtos');

    if (!lista || !$('pesquisa') || !$('categoria') ||
        !$('ordenacao') || !$('quantidade-produtos') ||
        !$('mensagem-vazia')) return;

    const termo = $('pesquisa').value.trim().toLowerCase();
    const tipo = $('categoria').value;

    const encontrados = produtos.filter(p =>
        (p.nome.toLowerCase().includes(termo) ||
         p.marca.toLowerCase().includes(termo)) &&
        (tipo === 'todos' || p.categoria === tipo)
    );

    const ordenar = $('ordenacao').value;

    if (ordenar === 'menor-preco') {
        encontrados.sort((a, b) => a.preco - b.preco);
    }

    if (ordenar === 'maior-preco') {
        encontrados.sort((a, b) => b.preco - a.preco);
    }

    if (ordenar === 'nome') {
        encontrados.sort((a, b) =>
            a.nome.localeCompare(b.nome)
        );
    }

    lista.replaceChildren();

    encontrados.forEach(produto => {
        const card = document.createElement('article');
        card.className = 'produto-card';

        const imagem = document.createElement('div');
        imagem.className = 'imagem-produto';
        imagem.append(criarImagem(produto));

        const info = document.createElement('div');
        info.className = 'info-produto';

        const marca = document.createElement('p');
        marca.className = 'marca-produto';
        marca.textContent = produto.marca;

        const nome = document.createElement('h3');
        nome.textContent = produto.nome;

        const desc = document.createElement('p');
        desc.className = 'descricao-produto';
        desc.textContent =
            `Tênis ${produto.categoria} da ${produto.marca}, para unir estilo e conforto.`;

        const preco = document.createElement('p');
        preco.className = 'preco-produto';
        preco.textContent = precoBR(produto.preco);

        const botoes = document.createElement('div');
        botoes.className = 'botoes-produto';

        const comprar = document.createElement('button');
        comprar.type = 'button';
        comprar.textContent = 'Adicionar ao carrinho';
        comprar.onclick = () => adicionarAoCarrinho(produto);

        const detalhes = document.createElement('button');
        detalhes.type = 'button';
        detalhes.textContent = 'Ver detalhes';
        detalhes.onclick = () => abrirDetalhes(produto);

        botoes.append(comprar, detalhes);
        info.append(marca, nome, desc, preco, botoes);
        card.append(imagem, info);

        lista.append(card);
    });

    $('quantidade-produtos').textContent =
        `Mostrando ${encontrados.length} de ${produtos.length} produtos`;

    $('mensagem-vazia').hidden = encontrados.length > 0;
}

if ($('lista-produtos')) {
    ['pesquisa', 'categoria', 'ordenacao'].forEach(id => {
        $(id)?.addEventListener(
            id === 'pesquisa' ? 'input' : 'change',
            mostrarProdutos
        );
    });

    const categoriaURL =
        new URLSearchParams(location.search).get('categoria');

    if (
        categoriaURL &&
        [...$('categoria').options].some(
            op => op.value === categoriaURL
        )
    ) {
        $('categoria').value = categoriaURL;
    }

    criarCarrinho();
    mostrarProdutos();
}

function atualizarContador(prefixo) {
    const ids = prefixo
        ? ['oferta-dias', 'oferta-horas', 'oferta-minutos', 'oferta-segundos']
        : ['dias', 'horas', 'minutos', 'segundos'];

    if (!ids.every(id => $(id))) return;

    const agora = new Date();
    let natal = new Date(agora.getFullYear(), 11, 25);

    if (agora >= natal) {
        natal = new Date(agora.getFullYear() + 1, 11, 25);
    }

    const ms = natal - agora;

    const valores = [
        Math.floor(ms / 86400000),
        Math.floor(ms / 3600000) % 24,
        Math.floor(ms / 60000) % 60,
        Math.floor(ms / 1000) % 60
    ];

    ids.forEach((id, i) => {
        $(id).textContent = String(valores[i]).padStart(2, '0');
    });

    if (!prefixo && $('mensagem-natal')) {
        $('mensagem-natal').textContent =
            `Faltam ${valores[0]} dias para o Natal!`;
    }
}

if ($('dias')) {
    atualizarContador(false);
    setInterval(() => atualizarContador(false), 1000);
}

if ($('oferta-dias')) {
    atualizarContador(true);
    setInterval(() => atualizarContador(true), 1000);
}

const animados = document.querySelectorAll('.animar-scroll');

if (animados.length) {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entradas => {
            entradas.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visivel');
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });

        animados.forEach(el => observer.observe(el));
    } else {
        animados.forEach(el => el.classList.add('visivel'));
    }
}

const promocoesNatal = [
    {nome:"Nike Air Force 1 '07", desconto:20},
    {nome:'Nike Air Max Excee', desconto:15},
    {nome:'Adidas Samba OG', desconto:25},
    {nome:'Adidas Campus 00s', desconto:20},
    {nome:'New Balance 574 Core', desconto:15},
    {nome:'Puma Palermo', desconto:20},
    {nome:'Vans Old Skool', desconto:25},
    {nome:'LV Trainer Sneaker', desconto:10}
];

const listaOfertas = $('lista-ofertas');

function abrirLightboxOferta(produto, preco) {
    const box = $('lightbox-ofertas');
    if (!box) return;

    $('lightbox-imagem').src = produto.imagem;
    $('lightbox-imagem').alt = produto.nome;
    $('lightbox-nome').textContent = produto.nome;
    $('lightbox-preco').textContent =
        'Preço promocional: ' + precoBR(preco);

    box.hidden = false;
    $('fechar-lightbox').focus();
}

function fecharLightboxOferta() {
    if ($('lightbox-ofertas')) {
        $('lightbox-ofertas').hidden = true;
    }
}

function mostrarOfertas() {
    if (!listaOfertas) return;

    listaOfertas.replaceChildren();

    promocoesNatal.forEach(oferta => {
        const produto = produtos.find(
            p => p.nome.trim() === oferta.nome
        );

        if (!produto) {
            console.warn('Produto não encontrado:', oferta.nome);
            return;
        }

        const valor = produto.preco * (1 - oferta.desconto / 100);

        const card = document.createElement('article');
        card.className = 'produto-card card-oferta';

        const area = document.createElement('div');
        area.className = 'imagem-produto imagem-oferta';

        const img = criarImagem(produto, true);

        img.onclick = () => {
            abrirLightboxOferta(produto, valor);
        };

        img.onkeydown = e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                abrirLightboxOferta(produto, valor);
            }
        };

        area.append(img);

        const info = document.createElement('div');
        info.className = 'info-produto';

        const desconto = document.createElement('p');
        desconto.className = 'selo-desconto';
        desconto.textContent = oferta.desconto + '% OFF';

        const marca = document.createElement('p');
        marca.className = 'marca-produto';
        marca.textContent = produto.marca;

        const nome = document.createElement('h3');
        nome.textContent = produto.nome;

        const antigo = document.createElement('p');
        antigo.className = 'preco-antigo';
        antigo.textContent = 'De: ' + precoBR(produto.preco);

        const novo = document.createElement('p');
        novo.className = 'preco-produto';
        novo.textContent = 'Por: ' + precoBR(valor);

        const botao = document.createElement('button');
        botao.className = 'botao botao-oferta';
        botao.type = 'button';
        botao.textContent = 'Adicionar ao carrinho';

        botao.onclick = () => {
            adicionarAoCarrinho({
                ...produto,
                preco: Number(valor.toFixed(2))
            });
        };

        info.append(
            desconto, marca, nome,
            antigo, novo, botao
        );

        card.append(area, info);
        listaOfertas.append(card);
    });
}

if (listaOfertas) {
    criarCarrinho();
    mostrarOfertas();

    $('fechar-lightbox')?.addEventListener(
        'click', fecharLightboxOferta
    );

    $('lightbox-ofertas')?.addEventListener('click', e => {
        if (e.target === $('lightbox-ofertas')) {
            fecharLightboxOferta();
        }
    });

    document.addEventListener('keydown', e => {
        if (
            e.key === 'Escape' &&
            $('lightbox-ofertas') &&
            !$('lightbox-ofertas').hidden
        ) {
            fecharLightboxOferta();
        }
    });
}

const formularioContato = $('form-contato');

if (formularioContato) {
    const campos = [
        {
            id: 'nome-contato',
            erro: 'erro-nome',
            validar: v => v
                ? ''
                : 'Por favor, digite seu nome.'
        },
        {
            id: 'email-contato',
            erro: 'erro-email',
            validar: v => !v
                ? 'Por favor, digite seu e-mail.'
                : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
                    ? 'Digite um e-mail válido. Exemplo: nome@email.com'
                    : ''
        },
        {
            id: 'assunto-contato',
            erro: 'erro-assunto',
            validar: v => v
                ? ''
                : 'Selecione um assunto.'
        },
        {
            id: 'mensagem-contato',
            erro: 'erro-mensagem',
            validar: v => !v
                ? 'Por favor, escreva sua mensagem.'
                : v.length < 10
                    ? 'A mensagem precisa ter pelo menos 10 caracteres.'
                    : ''
        }
    ];

    function limparErro(c) {
        $(c.id).classList.remove('campo-invalido');
        $(c.id).removeAttribute('aria-invalid');
        $(c.erro).textContent = '';
    }

    campos.forEach(c => {
        $(c.id).addEventListener(
            c.id === 'assunto-contato' ? 'change' : 'input',
            () => {
                limparErro(c);
                $('mensagem-formulario').textContent = '';
                $('mensagem-formulario').className = '';
            }
        );
    });

    formularioContato.addEventListener('submit', e => {
        e.preventDefault();
        let primeiroErro = null;

        campos.forEach(c => {
            limparErro(c);
            const mensagem = c.validar($(c.id).value.trim());

            if (mensagem) {
                $(c.id).classList.add('campo-invalido');
                $(c.id).setAttribute('aria-invalid', 'true');
                $(c.erro).textContent = mensagem;

                if (!primeiroErro) {
                    primeiroErro = $(c.id);
                }
            }
        });

        const resultado = $('mensagem-formulario');
        const valido = !primeiroErro;

        resultado.textContent = valido
            ? 'Mensagem validada com sucesso! Obrigado por entrar em contato.'
            : 'Verifique os campos destacados e tente novamente.';

        resultado.className = valido
            ? 'mensagem-sucesso'
            : 'mensagem-erro';

        if (valido) {
            formularioContato.reset();
        } else {
            primeiroErro.focus();
        }
    });
}

if ($('menu-toggle') && $('menu-principal')) {
    const botao = $('menu-toggle');
    const menu = $('menu-principal');

    function definirMenu(aberto) {
        menu.classList.toggle('menu-aberto', aberto);

        botao.setAttribute('aria-expanded', String(aberto));

        botao.setAttribute(
            'aria-label',
            aberto
                ? 'Fechar menu de navegação'
                : 'Abrir menu de navegação'
        );

        botao.textContent = aberto ? '✕' : '☰';
    }

    botao.onclick = () => {
        definirMenu(!menu.classList.contains('menu-aberto'));
    };

    menu.querySelectorAll('a').forEach(link => {
        link.onclick = () => definirMenu(false);
    });
}

const musicaNatal = new Audio('Audio/musica-natal.mp3');

musicaNatal.loop = true;
musicaNatal.volume = 0.3;

const botaoMusica = document.createElement('button');
botaoMusica.id = 'botao-musica';
botaoMusica.type = 'button';

document.body.append(botaoMusica);

function atualizarBotaoMusica(tocando) {
    botaoMusica.textContent = tocando
        ? '♫ Pausar música'
        : '♫ Tocar música';

    botaoMusica.setAttribute(
        'aria-label',
        tocando
            ? 'Pausar música natalina'
            : 'Tocar música natalina'
    );

    botaoMusica.setAttribute('aria-pressed', String(tocando));
}

atualizarBotaoMusica(false);

botaoMusica.onclick = async () => {
    if (!musicaNatal.paused) {
        musicaNatal.pause();
        atualizarBotaoMusica(false);
        return;
    }

    try {
        await musicaNatal.play();
        atualizarBotaoMusica(true);
    } catch (erro) {
        console.error('Erro ao tocar música:', erro);
        alert('Confira o arquivo Audio/musica-natal.mp3.');
    }
};

const bannerParallax = document.querySelector(".banner");

if (bannerParallax) {
    function atualizarParallax() {
        const movimento = window.scrollY * 0.35;

        bannerParallax.style.setProperty(
            "--parallax-y",
            movimento + "px"
        );
    }

    window.addEventListener(
        "scroll",
        atualizarParallax,
        { passive: true }
    );

    atualizarParallax();
}

(function iniciarCarrosselNatal() {
    const carrossel = document.getElementById("carrossel-natal");
    if (!carrossel) return;

    const nomes = ["Nike Pegasus 41", "Adidas Samba OG", "Puma Palermo"];
    const destaques = nomes
        .map(nome => produtos.find(p => p.nome === nome))
        .filter(Boolean);

    const area = document.getElementById("carrossel-slides");
    const indicadores = document.getElementById("carrossel-indicadores");
    const posicao = document.getElementById("carrossel-posicao");

    if (!destaques.length) return;

    const slides = [], botoes = [];
    let atual = 0, temporizador;
    let mouseSobre = false, focoDentro = false;

    const reduzirMovimento = matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    destaques.forEach((produto, indice) => {
        const slide = document.createElement("article");
        slide.className = "carrossel-slide";
        slide.id = "destaque-natal-" + (indice + 1);
        slide.hidden = indice !== 0;

        slide.setAttribute("aria-roledescription", "slide");
        slide.setAttribute(
            "aria-label",
            `${indice + 1} de ${destaques.length}`
        );

        const info = document.createElement("div");
        info.className = "carrossel-info";

        const etiqueta = document.createElement("p");
        etiqueta.className = "subtitulo";
        etiqueta.textContent = "DESTAQUE LUX MODESTO";

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;

        const descricao = document.createElement("p");
        descricao.className = "carrossel-descricao";
        descricao.textContent =
            `${produto.marca} · Coleção ${produto.categoria}`;

        const preco = document.createElement("p");
        preco.className = "carrossel-preco";
        preco.textContent = formatarPreco(produto.preco);

        const link = document.createElement("a");
        link.className = "botao";
        link.href = "produtos.html?categoria=" +
            encodeURIComponent(produto.categoria);
        link.textContent = "Ver modelos";

        info.append(etiqueta, nome, descricao, preco, link);

        const foto = document.createElement("div");
        foto.className = "carrossel-foto";

        const img = criarImagem(produto);
        if (indice === 0) img.loading = "eager";

        img.onerror = () => {
            img.onerror = null;
            img.src = "Imagem/Logo.png";
            img.alt = "Imagem do tênis indisponível; logotipo LUX MODESTO";
        };

        foto.append(img);
        slide.append(info, foto);
        area.append(slide);
        slides.push(slide);

        const botao = document.createElement("button");
        botao.type = "button";
        botao.setAttribute(
            "aria-label",
            `Ir para destaque ${indice + 1}`
        );
        botao.setAttribute("aria-controls", slide.id);
        botao.setAttribute("aria-pressed", String(indice === 0));

        botao.addEventListener("click", () => {
            mostrar(indice);
            iniciar();
        });

        indicadores.append(botao);
        botoes.push(botao);
    });

    function mostrar(indice) {
        atual = (indice + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.hidden = i !== atual;
        });

        botoes.forEach((botao, i) => {
            botao.setAttribute(
                "aria-pressed",
                String(i === atual)
            );
        });

        posicao.textContent =
            `${String(atual + 1).padStart(2, "0")} / ` +
            String(slides.length).padStart(2, "0");
    }

    function pausar() {
        clearInterval(temporizador);
    }

    function iniciar() {
        pausar();

        if (
            !reduzirMovimento &&
            !document.hidden &&
            !mouseSobre &&
            !focoDentro
        ) {
            temporizador = setInterval(() => {
                mostrar(atual + 1);
            }, 5000);
        }
    }

    document.getElementById("carrossel-anterior")
        .addEventListener("click", () => {
            mostrar(atual - 1);
            iniciar();
        });

    document.getElementById("carrossel-proximo")
        .addEventListener("click", () => {
            mostrar(atual + 1);
            iniciar();
        });

    carrossel.addEventListener("mouseenter", () => {
        mouseSobre = true;
        pausar();
    });

    carrossel.addEventListener("mouseleave", () => {
        mouseSobre = false;
        iniciar();
    });

    carrossel.addEventListener("focusin", () => {
        focoDentro = true;
        pausar();
    });

    carrossel.addEventListener("focusout", evento => {
        focoDentro = carrossel.contains(evento.relatedTarget);
        iniciar();
    });

    carrossel.addEventListener("keydown", evento => {
        if (evento.key === "ArrowLeft") {
            mostrar(atual - 1);
            iniciar();
        }

        if (evento.key === "ArrowRight") {
            mostrar(atual + 1);
            iniciar();
        }
    });

    document.addEventListener("visibilitychange", () => {
        document.hidden ? pausar() : iniciar();
    });

    iniciar();
})();

(function iniciarNeveNatal() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const camada = document.createElement("div");
    camada.className = "neve-natal";
    camada.setAttribute("aria-hidden", "true");

    for (let i = 0; i < 28; i++) {
        const floco = document.createElement("span");
        floco.className = "floco-neve";
        floco.textContent = "❄";

        floco.style.setProperty(
            "--x",
            (Math.random() * 100).toFixed(1) + "%"
        );

        floco.style.setProperty(
            "--tamanho",
            (9 + Math.random() * 9).toFixed(0) + "px"
        );

        floco.style.setProperty(
            "--duracao",
            (11 + Math.random() * 13).toFixed(1) + "s"
        );

        floco.style.setProperty(
            "--atraso",
            (-Math.random() * 24).toFixed(1) + "s"
        );

        floco.style.setProperty(
            "--desvio",
            (Math.random() * 110 - 55).toFixed(0) + "px"
        );

        camada.append(floco);
    }

    document.body.append(camada);
})();

(function configurarMenuMobile() {
    const cabecalho = document.querySelector('header');
    const menu = cabecalho?.querySelector('nav');
    if (!menu || cabecalho.querySelector('#menu-toggle')) return;

    menu.id = 'menu-principal';

    const botao = document.createElement('button');
    botao.id = 'menu-toggle';
    botao.className = 'menu-toggle';
    botao.type = 'button';
    botao.textContent = '☰';

    botao.setAttribute('aria-controls', 'menu-principal');
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu de navegação');

    menu.parentElement.insertBefore(botao, menu);

    function abrirMenu(aberto) {
        menu.classList.toggle('menu-aberto', aberto);

        botao.setAttribute('aria-expanded', String(aberto));
        botao.setAttribute(
            'aria-label',
            aberto ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
        );

        botao.textContent = aberto ? '✕' : '☰';
    }
    botao.addEventListener('click', () => {
        abrirMenu(!menu.classList.contains('menu-aberto'));
    });
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => abrirMenu(false));
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && menu.classList.contains('menu-aberto')) {
            abrirMenu(false);
            botao.focus();
        }
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) abrirMenu(false);
    });
})();

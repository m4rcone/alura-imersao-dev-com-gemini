function pesquisarPersonagem() {
    colocarImagensPretoEBranco();
    // Pega o valor digitado no input da busca
    let pesquisaUsuario = document.getElementById('nomePersonagem').value;
    // Verifica se o personagem procurado é o vingador (não está na base de dados)
    if(pesquisaUsuario.toLowerCase() == 'vingador') {
        let conteudoHTML = document.getElementById('search-content');
        conteudoHTML.innerHTML = 
        `<section class="item-box">
            <div class="item-box__content">
                <div class="item-box__content__img">
                </div>
                <div class="item-box__content__text">
                    <div class="item-box__content__text__tilte">
                        <h2>
                            <span>Vingador? #medo</span> &nbsp;<i class="fa-solid fa-face-flushed"></i> 
                        </h2>
                    </div>
                    <div class="item-box__content__text__description">
                        <p>O Vingador é um ser poderoso e maligno que busca dominar o Reino e derrotar Tiamat, a deusa dragão. Seus objetivos são obscuros e seus métodos cruéis, tornando-o uma ameaça constante para os jovens heróis.</p>
                        <p>Suas origens são um tanto nebulosas e repletas de mistérios. Existe uma teoria popular que ele é filho do Mestre dos Magos, no entanto, foi corrompido por forças malignas e se tornou servo de um ser conhecido como Aquele-Cujo-Nome-Não-Deve-Ser-Pronunciado!</p>
                    </div>
                </div>
            </div>
        </section>`;
        return; // Encerra a função sem procurar na base de dados
    }
    // Verifica se o personagem procurado está na base de dados
    for(i = 0; i < dadosPersonagens.length; i ++) {
        if(dadosPersonagens[i].nomePersonagem.toLowerCase() == pesquisaUsuario.toLowerCase()) {
            // Verifica se o personagem encontrado é o mestre dos magos em cada loop (easter egg)
            if(dadosPersonagens[i].nomePersonagem.toLowerCase() == 'mestre dos magos') {
                // Seleciona todos elementos das imagens dos personagens
                let imagemSelecionada = document.getElementsByClassName('item-img');
                // Adiciona cor a imagem de todos personagens e remove a ocultação da imagem do easter egg
                for (x = 0; x < imagemSelecionada.length; x ++) {
                    imagemSelecionada[x].classList.add('item-selected');
                    imagemSelecionada[x].classList.remove('item-img-hide');
                }
                // Coloca o conteúdo do personagem no HTML
                let conteudoHTML = document.getElementById('search-content');
                conteudoHTML.innerHTML = 
                `<section class="item-box">
                    <div class="item-box__content">
                        <div class="item-box__content__img">
                            <img src="scr/${dadosPersonagens[i].nomeArquivoImagem}.png" alt="">
                        </div>
                        <div class="item-box__content__text">
                            <div class="item-box__content__text__tilte">
                                <h2>
                                    <span>${dadosPersonagens[i].nomePersonagem}</span> &nbsp;${dadosPersonagens[i].iconeHTML}
                                </h2>
                            </div>
                            <div class="item-box__content__text__description">
                                <p>${dadosPersonagens[i].descricaoPersonagem}</p>
                                <p>Existe uma teoria popular de que o Vingador, o principal antagonista da série, seja filho do Mestre dos Magos.</p>
                                <p><b>Parabéns, você encontrou o personagem secreto! &nbsp;<i class="fa-solid fa-egg"></i></b</p>
                            </div>
                        </div>
                    </div>
                </section>`;
                return; // Encerra a função por ter encontrato o personagem na base de dados
            }
            // Adiciona cor ao personagem encontrado na base de dados
            let imagemSelecionada = document.getElementById(`${dadosPersonagens[i].nomeArquivoImagem}-img`);
            imagemSelecionada.classList.add('item-selected');
            // Coloca o conteúdo do personagem no HTML
            let conteudoHTML = document.getElementById('search-content');
            conteudoHTML.innerHTML = 
            `<section class="item-box">
                <div class="item-box__content">
                    <div class="item-box__content__img">
                        <img src="scr/${dadosPersonagens[i].nomeArquivoImagem}.png" alt="">
                    </div>
                    <div class="item-box__content__text">
                        <div class="item-box__content__text__tilte">
                            <h2>
                                <span>${dadosPersonagens[i].nomePersonagem}</span> &nbsp;${dadosPersonagens[i].iconeHTML}
                            </h2>
                        </div>
                        <div class="item-box__content__text__description">
                            <p>${dadosPersonagens[i].descricaoPersonagem}</p>
                            <p>Classe: ${dadosPersonagens[i].classePersonagem}</p>
                            <p>Equipamento: ${dadosPersonagens[i].equipamentoPersonagem}</p>
                        </div>
                    </div>
                </div>
            </section>`;
            return; // Encerra a função por ter encontrato o personagem na base de dados
        }
    }
    // Somente executa se não encontrar o personagem na base da dados
    let conteudoHTML = document.getElementById('search-content');
    conteudoHTML.innerHTML = 
        `<section class="item-box">
            <div class="item-box__content">
                <div class="item-box__content__img">
                </div>
                <div class="item-box__content__text">
                    <div class="item-box__content__text__tilte">
                        <h2>
                            <span>Personagem não econtrado!</span> &nbsp;<i class="fa-solid fa-face-sad-cry"></i>
                        </h2>
                    </div>
                    <div class="item-box__content__text__description">
                        <p>Caso não saiba o nome, investigue as imagens...</p>
                        <p>Lembre de tentar encontrar o personagem secreto caso ainda não tenha feito! &nbsp;<i class="fa-solid fa-egg"></i></p>
                    </div>
                </div>
            </div>
        </section>`;
}

// Coloca as imagens em preto e branco
function colocarImagensPretoEBranco() {
    let elementoImagens = document.getElementsByClassName('item-img');
    for (i = 0; i < elementoImagens.length; i ++) {
        elementoImagens[i].classList.remove('item-selected');
    }
}
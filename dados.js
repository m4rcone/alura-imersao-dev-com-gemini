let dadosPersonagens = [
    criarPersonagem('Hank', 'O líder nato do grupo, Hank é um arqueiro habilidoso e estrategista. Sua lealdade e senso de justiça são inabaláveis, e ele se preocupa profundamente com o bem-estar de seus amigos. Seu arco mágico é uma extensão de si mesmo, capaz de disparar flechas com propriedades únicas.', 'Ranger', 'Arco mágico', 'hank', '<i class="fa-solid fa-bolt"></i>'),  
    criarPersonagem('Sheila', 'A irmã mais velha de Bobby, Sheila é forte, determinada e protetora. Sua agilidade e força a tornam uma adversária formidável, e sua lealdade para com seus amigos é inabalável. Possui uma capa da invisibilidade, que a permite se esconder dos inimigos e realizar emboscadas.', 'Rogue', 'Capa da invisibilidade', 'sheila', '<i class="fa-solid fa-ghost"></i>'),
    criarPersonagem('Bobby', 'O mais jovem do grupo, Bobby é um bárbaro impulsivo e corajoso. Sua força bruta e coração puro o tornam um valioso aliado. Apesar de sua idade, ele demonstra uma maturidade surpreendente. Seu tacape mágico se torna muito poderoso quando ele o empunha com força.', 'Barbarian', 'Tacape mágico', 'bobby', '<i class="fa-solid fa-baseball-bat-ball"></i>'),
    criarPersonagem('Eric', 'O cavaleiro do grupo, Eric é conhecido por sua arrogância e egoísmo. No entanto, ele também possui um forte senso de honra e dever. Ao longo da série, ele amadurece e aprende a trabalhar em equipe. Utiliza um escudo mágico, que o protege de ataques físicos e mágicos, além de refletir ataques.', 'Paladin', 'Escudo mágico', 'eric', '<i class="fa-solid fa-shield-halved"></i>'),
    criarPersonagem('Diana', 'Uma acrobata habilidosa, Diana é a mais leve e rápida do grupo. Sua capacidade de se mover com graça e precisão a torna uma valiosa aliada em combate e na exploração. Utiliza um bastão mágico, que se transforma em diversas ferramentas, como corda, lança ou até mesmo uma escada.', 'Rogue', 'Bastão mágico', 'diana', '<i class="fa-solid fa-wand-magic"></i>'),
    criarPersonagem('Presto', 'O mago do grupo, Presto é um jovem inteligente e criativo. Seus conhecimentos em magia o tornam um membro indispensável da equipe, capaz de conjurar feitiços poderosos e resolver problemas complexos com seu chapéu mágico.', 'Wizard', 'Chapéu mágico', 'presto', '<i class="fa-solid fa-hat-wizard"></i>'),
    criarPersonagem('Mestre dos Magos', 'Um mago poderoso e sábio que guia os jovens em suas aventuras. Ele possui um vasto conhecimento sobre o reino e seus perigos, e muitas vezes oferece conselhos e apoio aos jovens aventureiros, entretanto, seus motivos mais profundos, permanecem obscuros.', '?????', '?????', 'mestre-dos-magos', '<i class="fa-solid fa-wand-sparkles"></i>')
  ];

function criarPersonagem(nome, descricao, classe, equipamento, imagem, icone) {
    return {
        nomePersonagem: nome,
        descricaoPersonagem: descricao,
        classePersonagem: classe,
        equipamentoPersonagem: equipamento,
        nomeArquivoImagem: imagem,
        iconeHTML: icone
    };
}
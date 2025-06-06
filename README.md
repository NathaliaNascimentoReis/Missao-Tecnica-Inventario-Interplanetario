# 🚀 *ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚ Missão Técnica: Inventário Interplanetário – Naves Alpha & Beta 🌟

## ✮⋆˙ Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia com método Pop
  * inventarioAlpha.pop("");

## ✮⋆˙ Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.
  * inventarioBeta.pop("");

## ✮⋆˙ Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.
  * inventarioAlpha.push(
    ["Detector Radioativo", "Terra", 9999],
    ["Saquinho de Necessidades", "Terra", 699],
    ["Tanque de Oxigênio Extra", "Terra", 7777]
);

## ✮⋆˙ Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.
  * inventarioBeta.push(
    ["Fragmento Cósmico", "Kepler", 16000],
    ["Pedra Estranha", "Kepler", 1000]
);

## Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.
  * itemEmDestaque = inventarioAlpha[7];
  inventarioAlpha.splice(7, 1);
  inventarioAlpha.unshift(itemEmDestaque);
  
## ✮⋆˙ Um item da Beta deve ser promovido para o início da lista para estudo prioritário.
  * itemEmDestaque = inventarioBeta[7];
  inventarioBeta.splice(7, 1);
  inventarioBeta.unshift(itemEmDestaque);

## ✮⋆˙ Um artefato incorreto foi inserido no topo da Alpha por engano. Ele deve ser excluído.
  * inventarioAlpha.shift();

## ✮⋆˙ O primeiro item da Beta pertence a um museu e deve ser removido.
  * inventarioBeta.shift();

## ✮⋆˙ Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.
  * novoArray = inventarioBeta.slice(0, 10);

## Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.
  * let paraInspecao = inventarioBeta.slice(0,5);

## ✮⋆˙ Separe os 10 últimos itens do inventário Alpha para estudo temporal.
  * let paraEstudoTemporal = inventarioAlpha.splice(16, 10);

## ✮⋆˙ O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.
  * inventarioAlpha.splice(4, 1, novoItem);

## ✮⋆˙ Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.
  * let contaminados = inventarioBeta.splice(12, 2);

## ✮⋆˙ Unifique os inventários Alpha e Beta em uma única estrutura.
  * let inventariosNaves = inventarioAlpha.concat(inventarioBeta);

## ✮⋆˙ Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.
  * let itensEmDestaqueAlpha = inventarioAlpha.splice(0, 5);
  let itensEmDestaqueBeta = inventarioBeta.splice(0, 5);
let vitrine = itensEmDestaqueAlpha.concat(itensEmDestaqueBeta)

## Inverta a ordem dos 15 primeiros itens da Alpha como simulação de viagem no tempo.
  * let alpha = inventarioAlpha.splice(0, 15);
  let alphaInvertido = alpha.reverse();

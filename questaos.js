let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];
  let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

  console.log("Alpha original:");
  console.table(inventarioAlpha);
  console.log("Beta original");
  console.table(inventarioBeta);

// 12- Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.

let novoArray;

console.log("12- Após modificação:");
novoArray = inventarioBeta.slice(0, 10);
console.log(novoArray);

// 13- Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.
let paraInspecao = inventarioBeta.slice(0,5);
console.log("13- Nova lista:");
console.table(paraInspecao);

// 14- Separe os 10 últimos itens do inventário Alpha para estudo temporal.
let paraEstudoTemporal = inventarioAlpha.splice(16, 10);
console.log("Lista para estudo temporal:");
console.table(paraEstudoTemporal);

// 15- O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.
let novoItem = ["Flor de Andrômeda Desenvolvida", "Andrômeda", 13400];
inventarioAlpha.splice(4, 1, novoItem);
console.log("Item 5 substituído por: ", novoItem);
console.table(inventarioAlpha);

// 16- Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.
let contaminados = inventarioBeta.splice(12, 2);
console.log("Itens contaminados:", contaminados);
console.table(inventarioBeta);

// 17- Unifique os inventários Alpha e Beta em uma única estrutura.
let inventariosNaves = inventarioAlpha.concat(inventarioBeta);
console.log("Inventários das Naves unificados:");
console.table(inventariosNaves);

// 18- Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.
let itensEmDestaqueAlpha = inventarioAlpha.splice(0, 5);
let itensEmDestaqueBeta = inventarioBeta.splice(0, 5);
let vitrine = itensEmDestaqueAlpha.concat(itensEmDestaqueBeta)
console.table(vitrine);

// 26-  Inverta a ordem dos 15 primeiros itens da Alpha como simulação de viagem no tempo.
let alpha = inventarioAlpha.splice(0, 15);
let alphaInvertido = alpha.reverse();
console.log("Inventário Alpha com 15 primeiros invertidos:");
console.table(alphaInvertido);
console.log(alpha);

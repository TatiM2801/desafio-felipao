// Variáveis para armazenar o nome e a XP do herói
var nomeHeroi = "Batman"; // Pode ser alterado 
var xpHeroi = 8000; // Pode ser alterado 

// Estrutura de decisão para o nível com base na XP
var nivel;
if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibir mensagem com o nome e o nível do herói
console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel);


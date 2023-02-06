let moedaReal = prompt("Digite um valor em Real");
let cotacaoEuro = 5.55;

let resultado = moedaReal * cotacaoEuro;
resultado = resultado.toFixed(2);
alert("€" + resultado);
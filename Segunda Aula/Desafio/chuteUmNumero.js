let numero = parseInt((Math.random() * 100))

let nome = prompt("Digite seu nome");
alert("Bem vindo " + nome);

let vidas = prompt("Digite quantas vidas você terá para acertar")
alert(nome + ' pense em um número de 1 a 10 e veja se acerta o valor gerado você possui: ' + vidas + ' vidas')

let chute = prompt('Digite um número entre 1 e 100')

while (chute != numero) {

    if (chute == numero) {
        alert('Acertou! Sobrou ' + vidas + ' vidas')
    } else if (chute < numero) {
        alert('Errou.. O número é menor que: ' + chute + ' Tente novamente por: ' + vidas + ' vidas')
        vidas = vidas - 1
    } else if (chute > numero) {
        alert('Errou.. O número é maior que: ' + chute + ' Tente novamente por: ' + vidas + ' vidas')
        vidas = vidas - 1
    }

    if (vidas = 0) {
        alert('Game Over! O número era: ' + numero)
    }
}
function adicionarFilmes() {
    var filmeFavorito = document.getElementById('filme').value
    var elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>'
    document.write('<img src=' + filmeFavorito + '>')
    document.getElementById('filme').value = ''
}
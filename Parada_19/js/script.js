function saudacao() {
    var nome = document.getElementById('nome').value;
    var saudacao = "Olá, " + nome + "!";
    document.getElementById('mensagem').innerHTML = saudacao;
}

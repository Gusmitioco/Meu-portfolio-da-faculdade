//script do projeto

//criando variaveis para cada resposta
var form = document.querySelector("form");
var nome = document.getElementById("nome-form");
var email = document.getElementById("email-form");
var motivo = document.getElementById("motivo-contato");
var modalSucesso = document.getElementById("modal-envio");
var modalErro = document.getElementById("modal-erro");

//validar se foi inserido os dados corretamente
form.addEventListener("submit", function(evento) {
    //deixar padrao apos apertar o botao de enviar e nao reiniciar a pagina
    evento.preventDefault();

    //verificar se o email esta no fomato certo
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailValido = regexEmail.test(email.value);

    //se estiver faltando algo ou preenchido errado, retorna modal de erro
    if (nome.value === "" || email.value === "" || motivo.value === "" || !emailValido) {
        // algum campo vazio ou email inválido
        modalErro.style.display = "block";
        setTimeout(function() {
            modalErro.style.display = "none";
        }, 3000);

    } else {
        // tudo certo, mostra sucesso e limpa os campos
        modalSucesso.style.display = "block";
        setTimeout(function() {
            modalSucesso.style.display = "none";
        }, 3000);

        //limpa os campos e mostra no console uma confirmacao
        nome.value = "";
        email.value = "";
        motivo.value = "";
        console.log("Mensagem enviada para o Gustavo!")
    }
});
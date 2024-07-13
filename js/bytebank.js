var saldo = 3000;
var elementoSaldo = document.querySelector(".saldo-valor .valor"); //Seleciona a classe onde está o nosso saldo
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString(); //altera o valor do saldo
}
var elementoFormulario = document.querySelector(".block-nova-transacao form"); //seleciona o form
//Função que previne o envio do formulário de transação.
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    //SELECIONANDO OS VALORES DOS CAMPOS IMPORTANTES PARA A TRANSAÇÃO: TIPO, VALOR E DATA
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Transação inválida!");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    //OBJETO CONTENDO AS INFORMAÇÕES DAS TRANSAÇÕES
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    //Após preencher as informações o formulário será reiniciado
    elementoFormulario.reset();
});

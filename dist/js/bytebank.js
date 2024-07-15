let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor"); //Seleciona a classe onde está o nosso saldo
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString(); //altera o valor do saldo
}
const elementoFormulario = document.querySelector(".block-nova-transacao form"); //seleciona o form
//Função que previne o envio do formulário de transação.
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    //SELECIONANDO OS VALORES DOS CAMPOS IMPORTANTES PARA A TRANSAÇÃO: TIPO, VALOR E DATA
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
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
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    //Após preencher as informações o formulário será reiniciado
    elementoFormulario.reset();
});

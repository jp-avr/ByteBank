let saldo = 3000;


const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement; //Seleciona a classe onde está o nosso saldo

if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString(); //altera o valor do saldo
}

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement; //seleciona o form

//Função que previne o envio do formulário de transação.
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if(!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    //SELECIONANDO OS VALORES DOS CAMPOS IMPORTANTES PARA A TRANSAÇÃO: TIPO, VALOR E DATA
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;

    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;

    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if(tipoTransacao == "Depósito") {
        saldo += valor;
    } else if(tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert("Transação inválida!");
        return;
    }

    elementoSaldo.textContent = saldo.toString();


    //OBJETO CONTENDO AS INFORMAÇÕES DAS TRANSAÇÕES
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    //Após preencher as informações o formulário será reiniciado
    elementoFormulario.reset();

});
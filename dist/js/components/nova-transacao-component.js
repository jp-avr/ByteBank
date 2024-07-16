import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form"); //seleciona o form
try {
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
        //OBJETO CONTENDO AS INFORMAÇÕES DAS TRANSAÇÕES
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        console.log(novaTransacao);
        //Após preencher as informações o formulário será reiniciado
        elementoFormulario.reset();
    });
}
catch (erro) {
    alert(erro.message);
}

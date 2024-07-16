import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js"; 
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement; //seleciona o form


try{
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
    
        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value + " 00:00:00");
        
        
        //OBJETO CONTENDO AS INFORMAÇÕES DAS TRANSAÇÕES
        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        }
        
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        console.log(novaTransacao);
    
        //Após preencher as informações o formulário será reiniciado
        elementoFormulario.reset();
    
    });
}catch (erro){
    alert(erro.message);
}
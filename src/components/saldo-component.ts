import { formatarMoeda } from "../utils/formatadores.js";
import { formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/formatoData.js";
import Conta from "../types/Conta.js";


const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement; //Seleciona a classe onde está o nosso saldo
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_MES_ANO);
}

renderizarSaldo();

function renderizarSaldo() : void {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());//altera o valor do saldo
    }
}

const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
}

export default SaldoComponent;
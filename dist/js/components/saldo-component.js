import { formatarMoeda } from "../utils/formatadores.js";
import { formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/formatoData.js";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor"); //Seleciona a classe onde está o nosso saldo
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_MES_ANO);
}
export function getSaldo() {
    return saldo;
}
atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo); //altera o valor do saldo
    }
}

import { formatarMoeda } from "../utils/formatadores.js";
import { formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/formatoData.js";

let saldo: number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement; //Seleciona a classe onde está o nosso saldo
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_MES_ANO);
}

export function getSaldo(): number {
    return saldo;
}

atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo: number) : void {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);//altera o valor do saldo
    }
}